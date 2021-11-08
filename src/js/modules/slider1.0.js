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
            counter: true
        });
    });
}


//selectorSlider as string, then as arguments - properties
String.prototype.slider = function({carousel = true, numFirstSlider = 1 , btnPrev, btnNext, navs = false, counter = true}) {
    const sliderContainer = document.querySelector(this);
    sliderContainer.querySelectorAll(`${this} > *`).forEach( contentBlock => {
        contentBlock.className = "slide";
    });
    let indexCurrentSlider = numFirstSlider,
        sliderContentArr = document.querySelectorAll(`${this} > *`), //кол-во элементов(слайдов) в контейнере
        width,
        dotsNav = [];

    createMainDOMStructure();


    if(navs) { //если передан "navs"
        sliderContainer.insertAdjacentHTML("beforeend", `
            <div class="slider__nav-dots">
            </div>
        `);
        const dotsNavWrapper = sliderContainer.querySelector(`.slider__nav-dots`);
        createNavsForSlider();

        dotsNavWrapper.addEventListener("click", (e) => {
            const target = e.target;
            if (target.classList.contains("slider__dot") &&
                !target.classList.contains("slider__dot_active")) {
                indexCurrentSlider = +target.dataset.index + 1;
                changeContentSlider(dotsNav);
            }
        });

        function createNavsForSlider() {    
            for(let i = 0; i < sliderContentArr.length; i++) {
                dotsNav[i] = document.createElement("div");
                dotsNav[i].classList.add("slider__dot");
    
                dotsNavWrapper.insertAdjacentElement("beforeend", dotsNav[i]);
            }
            dotsNav[0].classList.add("slider__dot_active");
            setIndexes(dotsNav);
        }
    }

    if(btnPrev && btnNext) {    // если использовать custom кнопки
    } else if ( !(btnPrev && btnNext) && counter) {     //если хотя бы один из этих агрументов не передан - создаются стандартные переключатели
        sliderContainer.querySelector(".slider-counter").insertAdjacentHTML("beforeend", `
            <div class="slider-btnPrev">
                <img src="icons/left.svg" alt="prev">
            </div>
            <span id="current">${getZero(indexCurrentSlider)}</span>
            /
            <span id="total">${getZero(sliderContentArr.length)}</span>
            <div class="slider-btnNext">
                <img src="icons/right.svg" alt="next">
            </div>
        `);
    }



    const sliderContentWrapper = sliderContainer.querySelector(".slider-wrapper"),
        sliderNavsWrapper = sliderContainer.querySelector(".slider-counter"),
        prevSliderBtn = sliderNavsWrapper.querySelector(".slider-btnPrev"),
        nextSliderBtn = sliderNavsWrapper.querySelector(".slider-btnNext");

    sliderContentArr = document.querySelectorAll(`${this} .slider-wrapper > *`);
    setIndexes(sliderContentArr);

    if(carousel) setWidthSliderWrapper();
    else showOneSlide();

    function setCounter() {
        const counterSliderTotal = sliderNavsWrapper.querySelector("#total"),
            counterSliderCurrent = sliderNavsWrapper.querySelector("#current");

        counterSliderCurrent.innerHTML = getZero(indexCurrentSlider);
        counterSliderTotal.innerHTML = getZero(sliderContentArr.length);
    }
    

    function setWidthSliderWrapper() {
        width = window.getComputedStyle(document.querySelector(".slider-wrapper-long")).width;
        sliderContentWrapper.style.width = `calc( ${width} * ${sliderContentArr.length})`;
    }

    function changeContentSlider() {
        //смена номера текущего слайда и анимация на нужной dotNav
        if(counter) {
            setCounter();
        } 
        
        if(navs) { //если nav передан в функцию(если есть nav меню)
            dotsNav.forEach( dot => {
                dot.classList.remove("slider__dot_active");
                if(dot.dataset.index == indexCurrentSlider - 1) {
                    dot.classList.add("slider__dot_active");
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



    }

    nextSliderBtn.addEventListener("click", () => {
        //меняет индекс и номер слайдера на странице
        indexCurrentSlider = (indexCurrentSlider == sliderContentArr.length) ? 1 : indexCurrentSlider + 1;

        changeContentSlider(dotsNav);
    });

    prevSliderBtn.addEventListener("click", (e) => {
        //меняет индекс и номер слайдера на странице
        indexCurrentSlider = (indexCurrentSlider == 1) ? sliderContentArr.length : indexCurrentSlider - 1;

        changeContentSlider(dotsNav);
    });

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
};

export default firstSlider;