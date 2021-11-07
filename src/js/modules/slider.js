import {getData} from "./universalFunctions";
import {getZero} from "./universalFunctions";
import {setIndexes} from "./universalFunctions";


function slider() {
    // slider
    const sliderContentWrapper = document.querySelector(".offer__slider-wrapper"),
        sliderNavsWrapper = document.querySelector(".offer__slider-counter"),
        counterSliderTotal = sliderNavsWrapper.querySelector("#total"),
        counterSliderCurrent = sliderNavsWrapper.querySelector("#current"),
        prevSliderBtn = sliderNavsWrapper.querySelector(".offer__slider-prev"),
        nextSliderBtn = sliderNavsWrapper.querySelector(".offer__slider-next"),
        dotsNavWrapper = document.querySelector(".offer__slider-dots");

    let indexCurrentSlider = 1,
        sliderContentArr = [],
        dotsNav = [],
        width;

    getData("http://localhost:3000/imagesForSlider")
        .then(dataArr => {
            dataArr.forEach(contentSlider => {
                const div = document.createElement("div");
                div.classList.add("offer__slide");

                div.innerHTML = `
                    <img src="${contentSlider.imgUrl}" alt="${contentSlider.imgAlt}">
                `;
                sliderContentWrapper.append(div);
            });
        })
        .then(() => {
            width = window.getComputedStyle(document.querySelector(".offer__slider-wrapper-long")).width;
            sliderContentArr = sliderContentWrapper.querySelectorAll(".offer__slide");
            // setIndexes(sliderContentArr); //для старой версии слайдера
            sliderContentArr[indexCurrentSlider - 1].classList.add("offer__slide_active");
            createNavsForSlider(dotsNavWrapper, dotsNav);

            sliderContentWrapper.style.width = `calc( ${width} * ${sliderContentArr.length})`;

            counterSliderCurrent.innerHTML = getZero(indexCurrentSlider);
            counterSliderTotal.innerHTML = getZero(sliderContentArr.length);
        });

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

    dotsNavWrapper.addEventListener("click", (e) => {
        const target = e.target;
        if (target.classList.contains("offer__slider-dot") &&
            !target.classList.contains("offer__slider-dot_active")) {
            indexCurrentSlider = +target.dataset.index + 1;
            changeContentSlider();
        }
    });


	function changeContentSlider() {
		//смена номера текущего слайда и анимация на нужной dotNav
		counterSliderCurrent.innerHTML = getZero(indexCurrentSlider);
		dotsNav.forEach( dot => {
			dot.classList.remove("offer__slider-dot_active");
			if(dot.dataset.index == indexCurrentSlider - 1) {
				dot.classList.add("offer__slider-dot_active");
			}
		});

		//смена контента слайда
		sliderContentWrapper.style.left = `calc(-${width} * ${indexCurrentSlider - 1})`;
		


		// Старая версия слайдера:
		// sliderContentArr.forEach(content => {
		// 	content.classList.remove("offer__slide_active");
		// 	if(content.dataset.index == indexCurrentSlider-1) {
		// 		content.classList.add("offer__slide_active");
		// 	}
		// });
	}

	function createNavsForSlider(dotsNavWrapper, dotsNav) {
		for(let i = 0; i < sliderContentArr.length; i++) {
			dotsNav[i] = document.createElement("div");
			dotsNav[i].classList.add("offer__slider-dot");

			dotsNavWrapper.insertAdjacentElement("beforeend", dotsNav[i]);
		}
		dotsNav[0].classList.add("offer__slider-dot_active");
		setIndexes(dotsNav);
	}
}

export default slider;