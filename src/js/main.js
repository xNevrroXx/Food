'use strict';

window.addEventListener("DOMContentLoaded", () => {
	// tabs
	const tabs = document.querySelectorAll(".tabheader__item"),
		tabsParent = document.querySelector(".tabheader__items"),
		tabsContent = document.querySelectorAll(".tabcontent");

	setIndexes(tabs);
	tabsParent.addEventListener("click", (event) => {
		const clickedElement = event.target;
		toggleTabContent(clickedElement);
	});


	// countdown(обратный отсчет времени)
	const endDatePromotion = '2022-01-01';
	initCountdown(".promotion__timer", endDatePromotion);


	// dynamic layout menu card
	const wrapperMenuCards = document.querySelector(".menu__field > .container");

	class MenuForTheDayCard {
		constructor(urlToImageMenu, altimg, subtitleMenu, descriptionMenu, priceAtDay, ...modificationsClasses) {
			this.urlToImageMenu = urlToImageMenu;
			this.altimg = altimg;
			this.subtitleMenu = subtitleMenu;
			this.menuDescription = descriptionMenu;
			this.priceAtDay = priceAtDay;
			this.innerHtml = `
			<div class="menu__item">
				<img src="${urlToImageMenu}" alt="${altimg}">
				<h3 class="menu__item-subtitle">${subtitleMenu}</h3>
				<div class="menu__item-descr">${descriptionMenu}</div>
				<div class="menu__item-divider"></div>
				<div class="menu__item-price">
					<div class="menu__item-cost">Цена:</div>
					<div class="menu__item-total"><span>${priceAtDay}</span> руб/день</div>
				</div>
			</div>
		`;
		}
	}

	const getData = async (url) => {
		const result = await fetch(url);

		if(!result.ok) {
			throw new Error(`Could not fetch ${url}, status: ${result.status}`);
		}
		return await result.json();
	};

	//динамическое создание карточек без повторяющегося кода. С помощью сервера. Подобие административной панели.
	getData("http://localhost:3000/menu")
		.then( dataArr => { //деструктуризация
			dataArr.forEach( ({img: imgUrl, altimg: altImg, title, descr, price}) => {
			// dataArr.forEach( object => {
				// const cardMenu = new MenuForTheDayCard(
				// 	object.img,
				// 	object.altimg,
				// 	object.title,
				// 	object.descr,
				// 	object.price
				// );
				const cardMenu = new MenuForTheDayCard(
					imgUrl,
					altImg,
					title,
					descr,
					price
				);
				wrapperMenuCards.insertAdjacentHTML("beforeend", cardMenu.innerHtml);
			});
		});
		
	///////////////////    AXIOS    /////////////////// 
	// axios.get("http://localhost:3000/menu")
	// .then( dataArr => {
	// 	// dataArr.data.forEach( ({img, altimg, title, descr, price}) => {
	// 						// const cardMenu = new MenuForTheDayCard(
	// 			// 	img,
	// 			// 	altimg,
	// 			// 	title,
	// 			// 	descr,
	// 			// 	price
	// 			// );
	// 	dataArr.data.forEach( object => {
	// 		const cardMenu = new MenuForTheDayCard(
	// 			object.img,
	// 			object.altimg,
	// 			object.title,
	// 			object.descr,
	// 			object.price
	// 		);

	// 		wrapperMenuCards.insertAdjacentHTML("beforeend", cardMenu.innerHtml);
	// 	});
	// });

	// const fitnessMenuCard = new MenuForTheDayCard(
	// 	`img/tabs/vegy.jpg`,
	// 	"altimg",
	// 	`Меню "Фитнес"`,
	// 	`Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!`,
	// 	229
	// );
	// const premiumMenuCard = new MenuForTheDayCard(
	// 	`img/tabs/elite.jpg`,
	// 	"altimg",
	// 	`Меню “Премиум”`,
	// 	`В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!`,
	// 	550
	// );
	// const lentenMenuCard = new MenuForTheDayCard(
	// 	`img/tabs/post.jpg`,
	// 	"altimg",
	// 	`Меню "Постное"`,
	// 	`Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.`,
	// 	430
	// );
	// wrapperMenuCards.insertAdjacentHTML("beforeend", fitnessMenuCard.innerHtml);
	// wrapperMenuCards.insertAdjacentHTML("beforeend", premiumMenuCard.innerHtml);
	// wrapperMenuCards.insertAdjacentHTML("beforeend", lentenMenuCard.innerHtml);

	
	// modal
	const modal = document.querySelector(".modal"),
		modalShowElems = document.querySelectorAll("[data-modal-show]"),
		modalTimerId = setTimeout(openModal, 20000);
		
	let booleanOpenThanksModal = false;

	modalShowElems.forEach(showElemBtn => {
		showElemBtn.addEventListener("click", openModal);
	});

	document.addEventListener("click", (e) => {
		if (e.target == document.querySelector(".modal_show") || e.target.getAttribute("data-modal-close") == "") {
			closeModal();
		}
	});

	document.addEventListener("keydown", (e) => {
		if ( e.code == "Escape") {
			closeModal();
		}
	});

	window.addEventListener("scroll", showModalByScroll);



	// forms
	const forms = document.querySelectorAll("form"),
		  messages = {
			loading: "icons/spinner.svg",
			success: "Спасибо! Мы скоро с Вами свяжемся",
			failure: "Что-то пошло не так..."
		  };

	forms.forEach(form => {
		bindPostData(form);
	});	

	const postData = async (url, data) => {
		const result = await fetch(url, {
			method: "POST",
			headers: {
				"Content-type": "application/json"
			},
			body: data
		});

		return await result.json();
	};

	function bindPostData(form) {
		form.addEventListener("submit", e => {
			e.preventDefault();

			const loadingSpinner = document.createElement("img");
			loadingSpinner.src = messages.loading;
			loadingSpinner.style.cssText = `
				display: block;
				margin: 0 auto;
			`;
			form.insertAdjacentElement("afterend", loadingSpinner);

			const formData = new FormData(form),
				  object   = {};
			formData.forEach((value, key) => {
				object[key] = value;
			});
			const json = JSON.stringify(object);

			postData('http://localhost:3000/requests', json)
			.then( data => {
				console.log(data);
				loadingSpinner.remove();
				form.reset();
				if(modal.classList.contains("modal_show")) {
					closeModal();
				}
				showThanksModal(messages.success);
			})
			.catch( () => {
				showThanksModal(messages.failure);
			});
		});
	}

	
	// slider
	const sliderContentWrapper = document.querySelector(".offer__slider-wrapper"),
		  sliderNavsWrapper = document.querySelector(".offer__slider-counter"),
		  counterSliderTotal = sliderNavsWrapper.querySelector("#total"),
		  counterSliderCurrent = sliderNavsWrapper.querySelector("#current"),
		  prevSliderBtn = sliderNavsWrapper.querySelector(".offer__slider-prev"),
		  nextSliderBtn = sliderNavsWrapper.querySelector(".offer__slider-next"),
		  dotsNavWrapper = document.querySelector(".offer__slider-dots");

	let	  indexCurrentSlider = 1,
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
	.then( () => {
		width = window.getComputedStyle(document.querySelector(".offer__slider-wrapper-long")).width;
		sliderContentArr = sliderContentWrapper.querySelectorAll(".offer__slide");
		// setIndexes(sliderContentArr); //для старой версии слайдера
		sliderContentArr[indexCurrentSlider-1].classList.add("offer__slide_active");
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
		if( target.classList.contains("offer__slider-dot") 
			&&
			!target.classList.contains("offer__slider-dot_active")) 
			{
				indexCurrentSlider = +target.dataset.index + 1;
				changeContentSlider();
			}
	});


	// calculating calorieAllowance
	const calculatingWrapper = document.querySelector(".calculating__field"),
		  genderWrapper = calculatingWrapper.querySelector("#gender"),
		  valueBodyWrapper = calculatingWrapper.querySelector("#bodyValue"),
		  activityWrapper = calculatingWrapper.querySelector("#activity"),
		  heigthSm = valueBodyWrapper.querySelector("#height"),
		  weightKg = valueBodyWrapper.querySelector("#weight"),
		  age = valueBodyWrapper.querySelector("#age"),
		  calculatingResult = calculatingWrapper.querySelector(".calculating__result span");

		  
	let inputGender = "female",
		inputActivity = "small",
		BMR,
		calorieAllowance;
		
	getLocalStorageValues();
	calculatingCalorieAllowance();

	genderWrapper.addEventListener("click", (e) => {
		const target = e.target,
		  	  calculatingChoose = genderWrapper.querySelectorAll(".calculating__choose-item");
		
		if( target.classList.contains("calculating__choose-item") 
			&& 
			!target.classList.contains("calculating__choose-item_active")) 
			{
			inputGender = target.dataset.gender;

			calculatingChoose.forEach(element => {
				element.classList.toggle("calculating__choose-item_active");
				// element.classList.remove("calculating__choose-item_active");
				// if(target == element) element.classList.add("calculating__choose-item_active");
			});
		}

		calculatingCalorieAllowance();
	});

	activityWrapper.addEventListener("click", (e) => {
		const target = e.target,
			  activityValue = activityWrapper.querySelectorAll(".calculating__choose-item");

		if(target.classList.contains("calculating__choose-item") 
		&& 
		!target.classList.contains("calculating__choose-item_active")) 
		{
			inputActivity = target.id;

			activityValue.forEach(element => {
				element.classList.remove("calculating__choose-item_active");
				if(target == element) element.classList.add("calculating__choose-item_active");
			});
		}

		calculatingCalorieAllowance();
	});

	valueBodyWrapper.addEventListener("input", () => {
		const valueBody = [heigthSm, weightKg, age];

		valueBody.forEach(element => {
			if(element.value == "") {
				element.style.border = "solid 2px red";
			}
			else {
				element.value = (deleteNotDigits(element.value));
				element.style.border = "";
			}
		});

		calculatingCalorieAllowance();
	});


	function calculatingCalorieAllowance() {
		setLocalStorageValues();

		if(heigthSm.value && weightKg.value && age.value) {
			switch(inputGender) {
				case "male":
					BMR = 88.36 + (13.4 * weightKg.value) + (4.8 * heigthSm.value) - (5.7 * age.value);
					break;
				case "female":
					BMR = 447.6 + (9.2 * weightKg.value) + (3.1 * heigthSm.value) - (4.3 * age.value);
					break;
			}


			switch(inputActivity) {
				case "low": 
					calorieAllowance = BMR * 1.2;
					break;
				case "small":
					calorieAllowance = BMR * 1.375;
					break;
				case "medium":
					calorieAllowance = BMR * 1.55;
					break;
				case "high": 
					calorieAllowance = BMR * 1.725;
					break;
			}

			calculatingResult.textContent = Math.round(calorieAllowance);
		}
		else {
			calculatingResult.textContent = "X";
		}
	}
















	/////////* functions */////////
	
	//universal
	function getZero(num) {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}

	function deleteNotDigits(str) {
		return str.replace(/\D/gi, "");
	}


	// for Tabs
	function toggleTabContent(clickedElement) {
		if (
			clickedElement &&
			clickedElement.classList.contains("tabheader__item") &&
			!clickedElement.classList.contains("tabheader__item_active")
		) {
			hideTabsContent();
			showTabsContent(clickedElement);
		}
	}

	function hideTabsContent() {
		tabs.forEach((tab) => {
			tab.classList.remove("tabheader__item_active");
		});
		tabsContent.forEach(tabContent => {
			tabContent.classList.remove("tabcontent_active", "fade");
		});
	}

	function showTabsContent(tab) {
		tab.classList.add("tabheader__item_active");
		tabsContent[tab.dataset.index].classList.add("tabcontent_active", "fade");
	}

	function setIndexes(elementsArr) { //для сопоставления таба/слайда и контента
		elementsArr.forEach((element, i) => {
			element.dataset.index = i;
		});
	}


	// for Countdown Time Promotion
	function initCountdown(selectorWrapperTimer, endDatePromotion) {
		const timer = document.querySelector(selectorWrapperTimer),
			daysBlock = document.getElementById("days"),
			hoursBlock = document.getElementById("hours"),
			minutesBlock = document.getElementById("minutes"),
			secondsBlock = document.getElementById("seconds"),
			timeInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const remainderTime = getRemainderTimeObj(endDatePromotion);
			changePromoTimeAtPage(remainderTime);
			changeTxtContentUnderTime();

			if (remainderTime.fullTimeMS <= 0) {
				clearInterval(timeInterval);
			}
		}

		function getRemainderTimeObj(endDatePromotionStr) {
			const remainderTimeMS = Date.parse(endDatePromotionStr) - new Date(),
				days = Math.floor(remainderTimeMS / (1000 * 60 * 60 * 24)),
				hours = Math.floor(remainderTimeMS / (1000 * 60 * 60) % 24),
				minutes = Math.floor(remainderTimeMS / (1000 * 60) % 60),
				seconds = Math.floor(remainderTimeMS / 1000 % 60);

			return {
				"fullTimeMS": remainderTimeMS,
				"days": days,
				"hours": hours,
				"minutes": minutes,
				"seconds": seconds
			};
		}

		function changePromoTimeAtPage(remainderTimeObj) {
			daysBlock.textContent = getZero(remainderTimeObj.days);
			hoursBlock.textContent = getZero(remainderTimeObj.hours);
			minutesBlock.textContent = getZero(remainderTimeObj.minutes);
			secondsBlock.textContent = getZero(remainderTimeObj.seconds);
		}

		function changeTxtContentUnderTime() { //меняет окончания слов
			changeEndingWord(secondsBlock.parentElement, ["секунд", "секунда", "секунды"]);
			changeEndingWord(minutesBlock.parentElement, ["минут", "минута", "минуты"]);
			changeEndingWord(hoursBlock.parentElement, ["часов", "час", "часа"]);
			changeEndingWord(daysBlock.parentElement, ["дней", "день", "дня"]);
		}

		function changeEndingWord(elementParentNum, arrWordForms) {
			if (elementParentNum.firstElementChild.textContent % 10 == 0 ||
				(elementParentNum.firstElementChild.textContent >= 5 &&
					elementParentNum.firstElementChild.textContent <= 20)
			) {
				elementParentNum.childNodes[2].textContent = arrWordForms[0];
			} else if (elementParentNum.firstElementChild.textContent % 10 == 1) {
				elementParentNum.childNodes[2].textContent = arrWordForms[1];
			} else if (elementParentNum.firstElementChild.textContent % 10 == 2 ||
				elementParentNum.firstElementChild.textContent % 10 == 3 ||
				elementParentNum.firstElementChild.textContent % 10 == 4) {
				elementParentNum.childNodes[2].textContent = arrWordForms[2];
			}
		}
	}


	// for modal
	function openModal() {
		modal.classList.add("modal_show");
		document.body.style.overflow = "hidden";
		clearInterval(modalTimerId);
	}

	function closeModal() {
		document.querySelectorAll(".modal").forEach( modal => {
			modal.classList.remove("modal_show");
		});
		booleanOpenThanksModal = false;
		document.body.style.overflow = "";
	}

	function showModalByScroll() {
		if (window.scrollY + document.documentElement.clientHeight == document.documentElement.scrollHeight) {
			openModal();
			window.removeEventListener("scroll", showModalByScroll);
		}
	}

	function showThanksModal(str) {
		const modalThanks = document.createElement("div");
		modalThanks.classList.add("modal", "modal_show");
		modalThanks.innerHTML = `
			<div class="modal__dialog">
				<div class="modal__content">
					<div data-modal-close class="modal__close">&times;</div>
					<div class="modal__title">${str}</div>
				</div>
			</div>
		`;
		modal.insertAdjacentElement("afterend", modalThanks);
		document.body.style.overflow = "hidden";

		const timerIdCloseThanksModal = setTimeout( closeThanksModal, 4000);

		function closeThanksModal() {
			if(booleanOpenThanksModal) {
				closeModal();
			} else {
				clearInterval(timerIdCloseThanksModal);
			}
		}
	}


	// for slider
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


	// for calculating calorie allowance
	function getLocalStorageValues() {
		inputGender = localStorage.getItem("inputGender") ? localStorage.getItem("inputGender") : inputGender;
		inputActivity = localStorage.getItem("inputActivity") ? localStorage.getItem("inputActivity") : inputActivity;
		heigthSm.value = localStorage.getItem("heigthSm.value") ? localStorage.getItem("heigthSm.value") : "";
		weightKg.value = localStorage.getItem("weightKg.value") ? localStorage.getItem("weightKg.value") : "";
		age.value = localStorage.getItem("age.value") ? localStorage.getItem("age.value") : "";

		document.querySelectorAll(".calculating__choose-item_active").forEach(element => {
			element.classList.remove("calculating__choose-item_active");
		});
		document.querySelector(`[data-gender="${inputGender}"]`).classList.add("calculating__choose-item_active");
		document.querySelector(`#${inputActivity}`).classList.add("calculating__choose-item_active");
	}

	function setLocalStorageValues() {
		localStorage.setItem("inputGender", inputGender);
		localStorage.setItem("inputActivity", inputActivity);
		localStorage.setItem("heigthSm.value", heigthSm.value);
		localStorage.setItem("weightKg.value", weightKg.value);
		localStorage.setItem("age.value", age.value);
	}
});
















	// fetch('https://jsonplaceholder.typicode.com/posts', {
	// 	method: "POST",
	// 	body: JSON.stringify({name: "Alex", surname: "Peterson"}),
	// 	headers: {
	// 		"Content-type": "application/json"
	// 	}
	// })
	// 	.then(response => response.json())
	// 	.then(json => console.log(json));

	//////////////////////////////////////////////////////////	
	// проскроллен ли элемент до полной видимости
	// const previewBlock = document.querySelector(".tabcontent");
	// window.addEventListener('wheel', (e) => {
	// 	const posTop = previewBlock.getBoundingClientRect().top;
	// 	e.preventDefault();
	// 	if (posTop + previewBlock.clientHeight <= window.innerHeight && posTop > 0) {

	// 	}
	// });
	//////////////////////////////////////////////////////////
	// test horizontal wheel - do NOT work...
	// (function() {

	// 	function scrollHorizontally(e) {
	// 		e = window.event || e;
	// 		var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
	// 		document.getElementById('statistic-table').scrollLeft -= (delta*10); // Multiplied by 10
	// 		e.preventDefault();
	// 	}
	// 	if (document.getElementById('statistic-table').addEventListener) {
	// 		// IE9, Chrome, Safari, Opera
	// 		document.getElementById('statistic-table').addEventListener("mousewheel", scrollHorizontally, false);
	// 		// Firefox
	// 		document.getElementById('statistic-table').addEventListener("DOMMouseScroll", scrollHorizontally, false);
	// 	} else {
	// 		// IE 6/7/8
	// 		document.getElementById('statistic-table').attachEvent("onmousewheel", scrollHorizontally);
	// 	}

	// })();


	// localStorage.setItem("number", 5);
	// localStorage.removeItem("number");
	// localStorage.clear();
	// console.log(localStorage.getItem("number"));