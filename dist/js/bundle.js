/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_calculatingCalorie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calculatingCalorie */ "./src/js/modules/calculatingCalorie.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cards */ "./src/js/modules/cards.js");
/* harmony import */ var _modules_countdownTimer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/countdownTimer */ "./src/js/modules/countdownTimer.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_slider1_0__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider1.0 */ "./src/js/modules/slider1.0.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");










window.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(() => Object(_modules_modal__WEBPACK_IMPORTED_MODULE_4__["openModal"])(".modal", modalTimerId), 20000);
  Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_modules_countdownTimer__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_cards__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_4__["default"])(".modal", "[data-modal-show]", modalTimerId);
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_3__["default"])("form", ".modal");
  Object(_modules_slider1_0__WEBPACK_IMPORTED_MODULE_5__["default"])(".firstSlider");
  Object(_modules_calculatingCalorie__WEBPACK_IMPORTED_MODULE_0__["default"])();
  ".slider2".slider({
    carousel: true,
    numFirstSlide: 1,
    btnPrevSelector: ".buttonPrev",
    btnNextSelector: ".buttonNext",
    counter: false,
    navs: true,
    widthContainerStr: "100%",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false // infinity: true

  });
}); // fetch('https://jsonplaceholder.typicode.com/posts', {
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

/***/ }),

/***/ "./src/js/modules/calculatingCalorie.js":
/*!**********************************************!*\
  !*** ./src/js/modules/calculatingCalorie.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _universalFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./universalFunctions */ "./src/js/modules/universalFunctions.js");


function calculatingCalorie() {
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
  genderWrapper.addEventListener("click", e => {
    const target = e.target,
          calculatingChoose = genderWrapper.querySelectorAll(".calculating__choose-item");

    if (target.classList.contains("calculating__choose-item") && !target.classList.contains("calculating__choose-item_active")) {
      inputGender = target.dataset.gender;
      calculatingChoose.forEach(element => {
        element.classList.toggle("calculating__choose-item_active"); // element.classList.remove("calculating__choose-item_active");
        // if(target == element) element.classList.add("calculating__choose-item_active");
      });
    }

    calculatingCalorieAllowance();
  });
  activityWrapper.addEventListener("click", e => {
    const target = e.target,
          activityValue = activityWrapper.querySelectorAll(".calculating__choose-item");

    if (target.classList.contains("calculating__choose-item") && !target.classList.contains("calculating__choose-item_active")) {
      inputActivity = target.id;
      activityValue.forEach(element => {
        element.classList.remove("calculating__choose-item_active");
        if (target == element) element.classList.add("calculating__choose-item_active");
      });
    }

    calculatingCalorieAllowance();
  });
  valueBodyWrapper.addEventListener("input", () => {
    const valueBody = [heigthSm, weightKg, age];
    showBlankFields(valueBody);
    calculatingCalorieAllowance();
  });

  function calculatingCalorieAllowance() {
    setLocalStorageValues();

    if (heigthSm.value && weightKg.value && age.value) {
      switch (inputGender) {
        case "male":
          BMR = 88.36 + 13.4 * weightKg.value + 4.8 * heigthSm.value - 5.7 * age.value;
          break;

        case "female":
          BMR = 447.6 + 9.2 * weightKg.value + 3.1 * heigthSm.value - 4.3 * age.value;
          break;
      }

      switch (inputActivity) {
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
    } else {
      calculatingResult.textContent = "X";
    }
  }

  function showBlankFields(inputsArr) {
    inputsArr.forEach(element => {
      if (element.value == "") {
        element.style.border = "solid 2px red";
      } else {
        element.value = Object(_universalFunctions__WEBPACK_IMPORTED_MODULE_0__["deleteNotDigits"])(element.value);
        element.style.border = "";
      }
    });
  }

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
}

/* harmony default export */ __webpack_exports__["default"] = (calculatingCalorie);

/***/ }),

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");


function cards() {
  // dynamic layout menu card
  const wrapperMenuCards = document.querySelector(".menu__field > .container");

  class MenuForTheDayCard {
    constructor(urlToImageMenu, altimg, subtitleMenu, descriptionMenu, priceAtDay) {
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

  } //динамическое создание карточек без повторяющегося кода. С помощью сервера. Подобие административной панели.


  Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getData"])("http://localhost:3000/menu").then(dataArr => {
    //деструктуризация
    dataArr.forEach(_ref => {
      let {
        img: imgUrl,
        altimg: altImg,
        title,
        descr,
        price
      } = _ref;
      // dataArr.forEach( object => {
      // const cardMenu = new MenuForTheDayCard(
      // 	object.img,
      // 	object.altimg,
      // 	object.title,
      // 	object.descr,
      // 	object.price
      // );
      const cardMenu = new MenuForTheDayCard(imgUrl, altImg, title, descr, price);
      wrapperMenuCards.insertAdjacentHTML("beforeend", cardMenu.innerHtml);
    });
  }); ///////////////////    AXIOS    /////////////////// 
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
}

/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./src/js/modules/countdownTimer.js":
/*!******************************************!*\
  !*** ./src/js/modules/countdownTimer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _universalFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./universalFunctions */ "./src/js/modules/universalFunctions.js");


function countdown() {
  // countdown(обратный отсчет времени)
  const endDatePromotion = '2022-05-17';
  initCountdown(".promotion__timer", endDatePromotion);

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
      const remainderTimeMS = Date.parse(endDatePromotionStr) - 1000 * 60 * 60 * 3 - new Date(),
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
      daysBlock.textContent = Object(_universalFunctions__WEBPACK_IMPORTED_MODULE_0__["getZero"])(remainderTimeObj.days);
      hoursBlock.textContent = Object(_universalFunctions__WEBPACK_IMPORTED_MODULE_0__["getZero"])(remainderTimeObj.hours);
      minutesBlock.textContent = Object(_universalFunctions__WEBPACK_IMPORTED_MODULE_0__["getZero"])(remainderTimeObj.minutes);
      secondsBlock.textContent = Object(_universalFunctions__WEBPACK_IMPORTED_MODULE_0__["getZero"])(remainderTimeObj.seconds);
    }

    function changeTxtContentUnderTime() {
      //меняет окончания слов
      changeEndingWord(secondsBlock.parentElement, ["секунд", "секунда", "секунды"]);
      changeEndingWord(minutesBlock.parentElement, ["минут", "минута", "минуты"]);
      changeEndingWord(hoursBlock.parentElement, ["часов", "час", "часа"]);
      changeEndingWord(daysBlock.parentElement, ["дней", "день", "дня"]);
    }

    function changeEndingWord(elementParentNum, arrWordForms) {
      if (elementParentNum.firstElementChild.textContent % 10 == 0 || elementParentNum.firstElementChild.textContent >= 5 && elementParentNum.firstElementChild.textContent <= 20) {
        elementParentNum.childNodes[2].textContent = arrWordForms[0];
      } else if (elementParentNum.firstElementChild.textContent % 10 == 1) {
        elementParentNum.childNodes[2].textContent = arrWordForms[1];
      } else if (elementParentNum.firstElementChild.textContent % 10 == 2 || elementParentNum.firstElementChild.textContent % 10 == 3 || elementParentNum.firstElementChild.textContent % 10 == 4) {
        elementParentNum.childNodes[2].textContent = arrWordForms[2];
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (countdown);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");



function forms(formSelector, modalSelector) {
  // forms
  const forms = document.querySelectorAll(formSelector),
        messages = {
    loading: "icons/spinner.svg",
    success: "Спасибо! Мы скоро с Вами свяжемся",
    failure: "Что-то пошло не так..."
  },
        modal = document.querySelector(modalSelector);
  forms.forEach(form => {
    bindPostData(form);
  });

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
            object = {};
      formData.forEach((value, key) => {
        object[key] = value;
      });
      const json = JSON.stringify(object);
      Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["postData"])('http://localhost:3000/requests', json).then(data => {
        console.log(data);
        loadingSpinner.remove();
        form.reset();

        if (modal.classList.contains("modal_show")) {
          Object(_modal__WEBPACK_IMPORTED_MODULE_0__["closeModal"])(modalSelector);
        }

        Object(_modal__WEBPACK_IMPORTED_MODULE_0__["showThanksModal"])(messages.success, modalSelector);
      }).catch(() => {
        Object(_modal__WEBPACK_IMPORTED_MODULE_0__["showThanksModal"])(messages.failure, modalSelector);
      });
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default, openModal, closeModal, showThanksModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showThanksModal", function() { return showThanksModal; });
let booleanOpenThanksModal = false;

function openModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add("modal_show");
  document.body.style.overflow = "hidden";
  if (modalTimerId) clearInterval(modalTimerId);
}

function closeModal(modalSelector) {
  document.querySelectorAll(modalSelector).forEach(modal => {
    modal.classList.remove("modal_show");
  });
  document.body.style.overflow = "";
  booleanOpenThanksModal = false;
}

function showThanksModal(str, modalSelector) {
  const modal = document.querySelector(modalSelector);
  booleanOpenThanksModal = true;
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
  const timerIdCloseThanksModal = setTimeout(closeThanksModal, 4000);

  function closeThanksModal() {
    if (booleanOpenThanksModal) {
      closeModal(modalSelector);
    } else {
      clearInterval(timerIdCloseThanksModal);
    }
  }
}

function modal(modalSelector, triggerSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector),
        modalShowElems = document.querySelectorAll(triggerSelector);
  modalShowElems.forEach(showElemBtn => {
    showElemBtn.addEventListener("click", () => openModal(modalSelector, modalTimerId));
  });
  document.addEventListener("click", e => {
    if (e.target == document.querySelector(".modal_show") || e.target.getAttribute("data-modal-close") == "") {
      closeModal(modalSelector, booleanOpenThanksModal);
    }
  });
  document.addEventListener("keydown", e => {
    if (e.code == "Escape") {
      closeModal(modalSelector, booleanOpenThanksModal);
    }
  });
  window.addEventListener("scroll", showModalByScroll);

  function showModalByScroll() {
    if (window.scrollY + document.documentElement.clientHeight == document.documentElement.scrollHeight) {
      openModal(modalSelector, modalTimerId);
      window.removeEventListener("scroll", showModalByScroll);
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (modal);




/***/ }),

/***/ "./src/js/modules/slider1.0.js":
/*!*************************************!*\
  !*** ./src/js/modules/slider1.0.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");
/* harmony import */ var _universalFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./universalFunctions */ "./src/js/modules/universalFunctions.js");



 //selectorSlider as string, then as arguments - properties

String.prototype.slider = function (_ref) {
  let {
    //arguments
    carousel = true,
    numFirstSlide = 1,
    btnPrevSelector = "standartBtn",
    btnNextSelector = "standartBtn",
    infinity = false,
    navs = false,
    counter = true,
    widthContainerStr,
    slidesToShow = 1,
    slidesToScroll = 1,
    autoplay = false,
    autoplaySpeed = 2000
  } = _ref;
  //function
  const sliderContainer = document.querySelector(this);
  changeSelectorContainer(this);

  for (let i = 0; i < sliderContainer.children.length; i++) {
    sliderContainer.children[i].classList.add("slide");
  }

  createMainDOMStructure();
  let indexCurrentSlider = localStorage.getItem(`indexCurrentSlider${this}`) ? +localStorage.getItem(`indexCurrentSlider${this}`) : numFirstSlide,
      slidesContentArr = sliderContainer.querySelectorAll(`.slide`),
      //кол-во элементов(слайдов) в контейнере
  width,
      dotsNav = [],
      dotsNavWrapper,
      autoplayTrigger,
      startSlidesContentArr;
  const sliderNavsWrapper = sliderContainer.querySelector(".slider-counter");
  const throwErrorsObj = {
    checkNumFirstSlide: () => {
      if (numFirstSlide > slidesContentArr.length - (slidesToShow - 1)) {
        throw new Error("the \"numFirstSlide\" cannot be more than the (\"slideContentArr\"-\"slidesToShow-1)\")");
      }
    },
    checkCounter: () => {
      if (counter && slidesToShow > 1) {
        throw new Error("It is not possible to use \"counter\" and \"slidesToShow != 1\" together yet.");
      }
    },
    checkSelectorContainer: () => {
      if (this == ".slider") {
        throw new Error(`container class must not match ".slider"`);
      }
    },
    checkCustomBtns: () => {
      if (btnPrevSelector != "standartBtn" && btnNextSelector != "standartBtn") {
        const btnNext = document.querySelector(`${this} ~ ${btnNextSelector}`),
              btnPrev = document.querySelector(`${this} ~ ${btnPrevSelector}`);
        if (!(btnNext && btnPrev)) throw new Error("There are no next/prev custom buttons elements. You should to create them.");
      }
    }
  };
  throwErrorsObj.checkNumFirstSlide();
  throwErrorsObj.checkCounter();
  throwErrorsObj.checkSelectorContainer();
  throwErrorsObj.checkCustomBtns();
  createWholeDOM(this);
  const sliderContentWrapper = sliderContainer.querySelector(".slider-wrapper"),
        prevSliderBtn = sliderNavsWrapper.querySelector(".slider-btnPrev"),
        nextSliderBtn = sliderNavsWrapper.querySelector(".slider-btnNext");
  changeContentSlider(this);
  slidesContentArr = document.querySelectorAll(`${this} .slider-wrapper > *`);
  if (infinity) startInfinitySlides();
  Object(_universalFunctions__WEBPACK_IMPORTED_MODULE_1__["setIndexes"])(slidesContentArr);
  setStyles(this);
  if (autoplay) initAutoplay();
  nextSliderBtn.addEventListener("click", () => {
    indexToNextSlider();
    ifInfinityTo("right");
    changeContentSlider(this);
  });
  prevSliderBtn.addEventListener("click", () => {
    indexToPrevSlider();
    ifInfinityTo("left");
    changeContentSlider(this);
  });

  if (navs) {
    dotsNavWrapper.addEventListener("click", e => {
      const target = e.target;

      if (target.classList.contains("slider-dot") && !target.classList.contains("slider-dot_active")) {
        indexCurrentSlider = +target.dataset.index + 1;
        changeContentSlider(this);
      }
    });
  } //functions


  function changeSelectorContainer() {
    let countSlidersAtPage;

    if (!localStorage.getItem("countSlidersAtPage")) {
      countSlidersAtPage = 0;
      localStorage.setItem("countSlidersAtPage", countSlidersAtPage);
    } else {
      countSlidersAtPage = localStorage.getItem("countSlidersAtPage");
    }

    if (!sliderContainer.classList.contains("slider")) {
      sliderContainer.classList.add(`slider`); //добавить класс "slider", если класс контейнера не имеет его
    }

    sliderContainer.id = ++countSlidersAtPage;
    localStorage.setItem("countSlidersAtPage", countSlidersAtPage);
  }

  function startInfinitySlides() {
    startSlidesContentArr = [...slidesContentArr];

    if (infinity && slidesContentArr.length > 1) {
      const tempSlidesArrForInfinity = [...slidesContentArr, ...slidesContentArr, ...slidesContentArr]; // setIndexes(tempSlidesArrForInfinity)

      slidesContentArr = tempSlidesArrForInfinity;
      replaceContentForInfinity(slidesContentArr);
    }
  }

  function ifInfinityTo(side) {
    if (infinity) {
      if (side == 'right') {
        const deletedElem = slidesContentArr.splice(0, 1);
        slidesContentArr.push(...deletedElem);
      } else if (side == 'left') {
        const deletedElem = slidesContentArr.splice(slidesContentArr.length - 2, 1);
        slidesContentArr.unshift(...deletedElem);
      }

      console.log(slidesContentArr);
      replaceContentForInfinity(slidesContentArr);
    }
  }

  function replaceContentForInfinity(elements) {
    sliderContentWrapper.innerHTML = '';
    elements.forEach(slide => {
      const copyElement = slide.cloneNode(true);
      sliderContentWrapper.insertAdjacentElement("beforeend", copyElement);
    });
    setWidthSlides();
  }

  function setStyles(selectorSlider) {
    if (widthContainerStr) {
      sliderContainer.style.width = widthContainerStr;
    }

    if (slidesToShow > 1) {
      setWidthSlides();
      setWidthSliderWrapper(selectorSlider);
      sliderContentWrapper.style.left = `calc(-${width} * ${indexCurrentSlider - 1})`;
    } else {
      slidesContentArr.forEach(slide => {
        slide.style.width = `${window.getComputedStyle(sliderContainer).width}`;
      });

      if (carousel) {
        setWidthSliderWrapper(selectorSlider);
        sliderContentWrapper.style.left = `calc(-${width} * ${indexCurrentSlider - 1})`;
      } else showOneSlide();
    }
  }

  function setWidthSlides() {
    slidesContentArr.forEach(slide => {
      slide.style.width = `
                ${Object(_universalFunctions__WEBPACK_IMPORTED_MODULE_1__["toFloatNumber"])(window.getComputedStyle(sliderContainer).width) / slidesToShow}px
            `;
    });
  }

  function setWidthSliderWrapper(selectorSlider) {
    width = window.getComputedStyle(document.querySelector(`${selectorSlider} .slide`)).width;
    sliderContentWrapper.style.width = `calc( ${width} * ${slidesContentArr.length})`;
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

  function createWholeDOM(sliderSelector) {
    //создание всей DOM-структуры(slidercontent, navArrows, navDots)
    if (navs) {
      //если передан "navs"
      sliderContainer.insertAdjacentHTML("beforeend", `
                <div class="slider__nav-dots">
                </div>
            `);
      dotsNavWrapper = sliderContainer.querySelector(`.slider__nav-dots`);
      createNavsForSlider();
    }

    if (counter && slidesToShow > 1) {
      throw new Error("It is not possible to use \"counter\" and \"slidesToShow != 1\" together.");
    } else if (counter) {
      sliderNavsWrapper.innerHTML = `
                <span id="current">${Object(_universalFunctions__WEBPACK_IMPORTED_MODULE_1__["getZero"])(indexCurrentSlider)}</span>
                /
                <span id="total">${Object(_universalFunctions__WEBPACK_IMPORTED_MODULE_1__["getZero"])(slidesContentArr.length)}</span>
            `;
    }

    if (btnPrevSelector != "standartBtn" && btnNextSelector != "standartBtn") {
      // если использовать custom кнопки
      sliderNavsWrapper.insertAdjacentHTML("afterbegin", `
                <div class="slider-btnPrev">
                </div>
            `);
      sliderNavsWrapper.insertAdjacentHTML("beforeend", `
                <div class="slider-btnNext">
                </div>
            `);
      const btnNext = document.querySelector(`${sliderSelector} ~ ${btnNextSelector}`),
            btnPrev = document.querySelector(`${sliderSelector} ~ ${btnPrevSelector}`);
      sliderNavsWrapper.querySelector(`.slider-btnPrev`).insertAdjacentElement("afterbegin", btnPrev.cloneNode(true));
      sliderNavsWrapper.querySelector(`.slider-btnNext`).insertAdjacentElement("afterbegin", btnNext.cloneNode(true));
      btnNext.remove();
      btnPrev.remove();
    } else if (btnPrevSelector == "standartBtn" && btnNextSelector == "standartBtn") {
      //если хотя бы один из этих агрументов не передан - создаются стандартные переключатели
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
    slidesContentArr.forEach(content => {
      content.classList.remove("slide_active");
      content.classList.add("slide_hidden");

      if (content.dataset.index == indexCurrentSlider - 1) {
        content.classList.remove("slide_hidden");
        content.classList.add("slide_active");
      }
    });
  }

  function changeContentSlider(sliderSelector) {
    if (autoplay) {
      //обнуляет таймер, чтобы не было перелистывания "подряд"
      console.log(true);
      initAutoplay();
    }

    if (counter && slidesToShow == 1) {
      setCounter();
    }

    if (navs) {
      //если nav передан в функцию(если есть nav меню)
      dotsNav.forEach(dot => {
        dot.classList.remove("slider-dot_active");

        if (dot.dataset.index == indexCurrentSlider - 1) {
          dot.classList.add("slider-dot_active");
        }
      });
    } //смена контента слайда


    switch (carousel) {
      case true:
        if (slidesToShow > 1) {
          if (infinity) {
            break; //если бесконечный слайдер - то перелистывание происходит за счет удаления одного из элементов
          } else if (indexCurrentSlider < slidesContentArr.length) {
            sliderContentWrapper.style.left = `calc(-${width} * ${indexCurrentSlider - 1})`;
          }
        } else {
          sliderContentWrapper.style.left = `calc(-${width} * ${indexCurrentSlider - 1})`;
        }

        break;

      case false:
        // Статично
        showOneSlide();
        break;
    }

    localStorage.setItem(`indexCurrentSlider${sliderSelector}`, indexCurrentSlider);
  }

  function setCounter() {
    const counterSliderTotal = sliderNavsWrapper.querySelector("#total"),
          counterSliderCurrent = sliderNavsWrapper.querySelector("#current");
    counterSliderCurrent.innerHTML = Object(_universalFunctions__WEBPACK_IMPORTED_MODULE_1__["getZero"])(indexCurrentSlider);
    counterSliderTotal.innerHTML = Object(_universalFunctions__WEBPACK_IMPORTED_MODULE_1__["getZero"])(slidesContentArr.length);
  }

  function createNavsForSlider() {
    for (let i = 0; i < slidesContentArr.length; i++) {
      dotsNav[i] = document.createElement("div");
      dotsNav[i].classList.add("slider-dot");
      dotsNavWrapper.insertAdjacentElement("beforeend", dotsNav[i]);
    }

    dotsNav[indexCurrentSlider - 1].classList.add("slider-dot_active");
    Object(_universalFunctions__WEBPACK_IMPORTED_MODULE_1__["setIndexes"])(dotsNav);
  }

  function indexToNextSlider() {
    if (indexCurrentSlider + (slidesToShow - 1) >= slidesContentArr.length && !infinity) {
      // Если крайняя правая позиция слайдера
      indexCurrentSlider = 1;
    } else {
      // Если есть возсожность пролистнуть хотя бы на 1 слайд вправо
      let counter = 0;

      do {
        counter++;
      } while (indexCurrentSlider + counter < slidesContentArr.length - (slidesToShow - 1) && counter < slidesToScroll);

      indexCurrentSlider += counter;
    }
  }

  function indexToPrevSlider() {
    if (indexCurrentSlider == 1 && !infinity) {
      // Если крайняя левая позиция слайдера
      indexCurrentSlider = slidesContentArr.length - (slidesToShow - 1);
    } else {
      // Если есть возсожность пролистнуть хотя бы на 1 слайд влево
      let counter = 0;

      do {
        counter++;
      } while (indexCurrentSlider - counter > 1 && counter < slidesToScroll);

      indexCurrentSlider -= counter;
    }
  }

  function initAutoplay() {
    //создает или сбрасывает время атвоматического перелистывания слайдера
    if (autoplayTrigger) {
      clearInterval(autoplayTrigger);
    }

    autoplayTrigger = setInterval(() => {
      indexToNextSlider();
      changeContentSlider(this);
    }, autoplaySpeed);
  }
};

function firstSlider(containerSlider) {
  const sliderContentWrapper = document.querySelector(containerSlider);
  Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getData"])("http://localhost:3000/imagesForSlider").then(dataArr => {
    console.log(dataArr);
    dataArr.forEach(contentSlider => {
      const div = document.createElement("div");
      div.innerHTML = `
                    <img src="${contentSlider.imgUrl}" alt="${contentSlider.imgAlt}">
                `;
      sliderContentWrapper.insertAdjacentElement("beforeend", div);
    });
  }).then(() => {
    containerSlider.slider({
      carousel: true,
      navs: true,
      counter: true,
      numFirstSlide: 1
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (firstSlider);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _universalFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./universalFunctions */ "./src/js/modules/universalFunctions.js");


function tabs() {
  const tabs = document.querySelectorAll(".tabheader__item"),
        tabsParent = document.querySelector(".tabheader__items"),
        tabsContent = document.querySelectorAll(".tabcontent");
  Object(_universalFunctions__WEBPACK_IMPORTED_MODULE_0__["setIndexes"])(tabs);
  tabsParent.addEventListener("click", event => {
    const clickedElement = event.target;
    toggleTabContent(clickedElement);
  });

  function toggleTabContent(clickedElement) {
    if (clickedElement && clickedElement.classList.contains("tabheader__item") && !clickedElement.classList.contains("tabheader__item_active")) {
      hideTabsContent();
      showTabsContent(clickedElement);
    }
  }

  function hideTabsContent() {
    tabs.forEach(tab => {
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
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./src/js/modules/universalFunctions.js":
/*!**********************************************!*\
  !*** ./src/js/modules/universalFunctions.js ***!
  \**********************************************/
/*! exports provided: setIndexes, getZero, deleteNotDigits, toFloatNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIndexes", function() { return setIndexes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZero", function() { return getZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteNotDigits", function() { return deleteNotDigits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFloatNumber", function() { return toFloatNumber; });
//universal
function setIndexes(elementsArr) {
  //для сопоставления таба/слайда и контента
  elementsArr.forEach((element, i) => {
    element.dataset.index = i;
  });
}

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

function toFloatNumber(str) {
  return str.replace(/[^\d,.]/g, '');
}






/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/*! exports provided: postData, getData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
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

const getData = async url => {
  const result = await fetch(url);

  if (!result.ok) {
    throw new Error(`Could not fetch ${url}, status: ${result.status}`);
  }

  return await result.json();
};



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map