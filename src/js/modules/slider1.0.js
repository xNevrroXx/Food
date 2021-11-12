import {getData} from "../services/services";
import {getZero} from "./universalFunctions";
import {setIndexes} from "./universalFunctions";


function firstSlider(containerSlider) {
    const sliderContentWrapper = document.querySelector(containerSlider);
    getData("http://localhost:3000/imagesForSlider")
    .then(dataArr => {
        dataArr.forEach(contentSlider => {
            const div = document.createElement("div");

            div.innerHTML = `
                <img src="${contentSlider.imgUrl}" alt="${contentSlider.imgAlt}">
            `;
            sliderContentWrapper.insertAdjacentElement("beforeend", div);
        });
    })
    .then(() => {
        containerSlider.slider({
            carousel: true,
            navs: true,
            counter: true,
            numFirstSlider: 3
        });
    });
}


//selectorSlider as string, then as arguments - properties
String.prototype.slider = function( {carousel = true, numFirstSlider = 1 , btnPrevSelector, btnNextSelector, navs = false, counter = true, widthContainer, slidesToShow = 1, slidesToScroll = 1, autoPlay = false} ) {
    const sliderContainer = document.querySelector(this);
    sliderContainer.querySelectorAll(`${this} > *`).forEach( contentBlock => {
        contentBlock.className = "slide";
    });
    createMainDOMStructure();
    
    let indexCurrentSlider = localStorage.getItem("indexCurrentSlider") ? +localStorage.getItem("indexCurrentSlider") : numFirstSlider,
        sliderContentArr = document.querySelectorAll(`${this} .slide`), //кол-во элементов(слайдов) в контейнере
        width,
        dotsNav = [],
        dotsNavWrapper;
    const sliderNavsWrapper = sliderContainer.querySelector(".slider-counter");
    createWholeDOM(this);


    const sliderContentWrapper = sliderContainer.querySelector(".slider-wrapper"),
        prevSliderBtn = sliderNavsWrapper.querySelector(".slider-btnPrev"),
        nextSliderBtn = sliderNavsWrapper.querySelector(".slider-btnNext");

    changeContentSlider();

    sliderContentArr = document.querySelectorAll(`${this} .slider-wrapper > *`);
    setIndexes(sliderContentArr);

    if(carousel) {
        setWidthSliderWrapper(this);
        sliderContentWrapper.style.left = `calc(-${width} * ${indexCurrentSlider - 1})`;
    } else showOneSlide();


    nextSliderBtn.addEventListener("click", () => {
        //меняет индекс и номер слайдера на странице
        indexCurrentSlider = (indexCurrentSlider == sliderContentArr.length) ? 1 : indexCurrentSlider + 1;

        changeContentSlider();
    });

    prevSliderBtn.addEventListener("click", (e) => {
        //меняет индекс и номер слайдера на странице
        indexCurrentSlider = (indexCurrentSlider == 1) ? sliderContentArr.length : indexCurrentSlider - 1;

        changeContentSlider();
    });

    if(navs) {
        dotsNavWrapper.addEventListener("click", (e) => {
            const target = e.target;
            if (target.classList.contains("slider-dot") &&
                !target.classList.contains("slider-dot_active")) {
                indexCurrentSlider = +target.dataset.index + 1;
                changeContentSlider();
            }
        });
    }





    //functions
    function createMainDOMStructure() {
        const startContent = sliderContainer.innerHTML;

        sliderContainer.innerHTML = `
            <div class="slider-counter">
            </div>

            <div class="slider-wrapper-long">
                <div class="slider-wrapper">
                    ${startContent}
                </div>
            </div>
        `;
    }

    function createWholeDOM(selectorSlider) {
        //создание всей DOM-структуры(slidercontent, navArrows, navDots)
        if(navs) { //если передан "navs"
            sliderContainer.insertAdjacentHTML("beforeend", `
                <div class="slider__nav-dots">
                </div>
            `);
            dotsNavWrapper = sliderContainer.querySelector(`.slider__nav-dots`);
            createNavsForSlider();
        }
    
        if(counter) {
            sliderNavsWrapper.innerHTML = `
                <span id="current">${getZero(indexCurrentSlider)}</span>
                /
                <span id="total">${getZero(sliderContentArr.length)}</span>
            `;
        }
    
        if(btnPrevSelector && btnNextSelector) {    // если использовать custom кнопки
            sliderNavsWrapper.insertAdjacentHTML("afterbegin", `
                <div class="slider-btnPrev">
                </div>
            `);
            sliderNavsWrapper.insertAdjacentHTML("beforeend", `
                <div class="slider-btnNext">
                </div>
            `);

            const btnNext = document.querySelector(`${selectorSlider} ~ ${btnNextSelector}`),
                  btnPrev = document.querySelector(`${selectorSlider} ~ ${btnPrevSelector}`);

            sliderNavsWrapper.querySelector(`.slider-btnPrev`).insertAdjacentElement("afterbegin", btnPrev.cloneNode(true));
            sliderNavsWrapper.querySelector(`.slider-btnNext`).insertAdjacentElement("afterbegin", btnNext.cloneNode(true));
    
            btnNext.remove();
            btnPrev.remove();
        } else if ( !(btnPrevSelector && btnNextSelector)) {     //если хотя бы один из этих агрументов не передан - создаются стандартные переключатели
            sliderNavsWrapper.insertAdjacentHTML("afterbegin", `
                <div class="slider-btnPrev">
                    <img src="icons/left.svg" alt="prev">
                </div>
            `);
            sliderNavsWrapper.insertAdjacentHTML("beforeend", `
                <div class="slider-btnNext">
                    <img src="icons/right.svg" alt="next">
                </div>
            `);
        }
    }

    function showOneSlide() {
        sliderContentArr.forEach(content => {
            content.classList.remove("slide_active");
            content.classList.add("slide_hidden");
            if(content.dataset.index == indexCurrentSlider - 1) {
                content.classList.remove("slide_hidden");
                content.classList.add("slide_active");
            }
        });
    }

    function changeContentSlider() {
        //смена номера текущего слайда и анимация на нужной dotNav
        if(counter) {
            setCounter();
        } 
        
        if(navs) { //если nav передан в функцию(если есть nav меню)
            dotsNav.forEach( dot => {
                dot.classList.remove("slider-dot_active");
                if(dot.dataset.index == indexCurrentSlider - 1) {
                    dot.classList.add("slider-dot_active");
                }
            });
        }

        //смена контента слайда
        if(carousel) {
            // Карусель
            sliderContentWrapper.style.left = `calc(-${width} * ${indexCurrentSlider - 1})`;
        } else { 
            // Статично
            showOneSlide();
        }

        localStorage.setItem("indexCurrentSlider", indexCurrentSlider);
    }

    function setCounter() {
        const counterSliderTotal = sliderNavsWrapper.querySelector("#total"),
            counterSliderCurrent = sliderNavsWrapper.querySelector("#current");

        counterSliderCurrent.innerHTML = getZero(indexCurrentSlider);
        counterSliderTotal.innerHTML = getZero(sliderContentArr.length);
    }
    

    function setWidthSliderWrapper(selectorSlider) {
        width = window.getComputedStyle(document.querySelector(`${selectorSlider} > .slider-wrapper-long`)).width;
        sliderContentWrapper.style.width = `calc( ${width} * ${sliderContentArr.length})`;
    }

    function createNavsForSlider() {    
        for(let i = 0; i < sliderContentArr.length; i++) {
            dotsNav[i] = document.createElement("div");
            dotsNav[i].classList.add("slider-dot");

            dotsNavWrapper.insertAdjacentElement("beforeend", dotsNav[i]);
        }
        dotsNav[indexCurrentSlider-1].classList.add("slider-dot_active");
        setIndexes(dotsNav);
    }
};

export default firstSlider;