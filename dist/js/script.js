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
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener("DOMContentLoaded", () => {
  // tabs
  const tabs = document.querySelectorAll(".tabheader__item"),
        tabsParent = document.querySelector(".tabheader__items"),
        tabsContent = document.querySelectorAll(".tabcontent");
  setTabsIndex();
  tabsParent.addEventListener("click", event => {
    const clickedElement = event.target;
    toggleTabContent(clickedElement);
  }); // countdown(обратный отсчет времени)

  const endDatePromotion = '2021-10-31';
  initCountdown(".promotion__timer", endDatePromotion); // modal

  const modal = document.querySelector(".modal"),
        modalShowElems = document.querySelectorAll("[data-modal-show]"),
        modalCloseElems = document.querySelectorAll("[data-modal-close]"),
        modalTimerId = setTimeout(openModal, 5000);
  modalShowElems.forEach(showElemBtn => {
    showElemBtn.addEventListener("click", openModal);
  });
  modalCloseElems.forEach(closeElemBtn => {
    closeElemBtn.addEventListener("click", closeModal);
  });
  modal.addEventListener("click", e => {
    if (e.target == modal) {
      closeModal();
    }
  });
  document.addEventListener("keydown", e => {
    if (e.code == "Escape" && modal.classList.contains("modal_show")) {
      closeModal();
    }
  });
  window.addEventListener("scroll", showModalByScroll);

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight == document.documentElement.scrollHeight) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
  } // dynamic layout menu card


  const wrapperMenuCards = document.querySelector(".menu__field > .container");

  class MenuForTheDayCard {
    constructor(urlToImageMenu, subtitleMenu, descriptionMenu, priceAtDay) {
      this.urlToImageMenu = urlToImageMenu;
      this.subtitleMenu = subtitleMenu;
      this.menuDescription = descriptionMenu;
      this.priceAtDay = priceAtDay;
      this.innerHtml = `
			<div class="menu__item">
				<img src="${urlToImageMenu}" alt="post">
				<h3 class="menu__item-subtitle">${subtitleMenu}</h3>
				<div class="menu__item-descr">${descriptionMenu}</div>
				<div class="menu__item-divider"></div>
				<div class="menu__item-price">
					<div class="menu__item-cost">Цена:</div>
					<div class="menu__item-total"><span>${priceAtDay}</span> грн/день</div>
				</div>
			</div>
		`;
    }

  }

  const fitnessMenuCard = new MenuForTheDayCard(`img/tabs/vegy.jpg`, `Меню "Фитнес"`, `Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!`, 229);
  const premiumMenuCard = new MenuForTheDayCard(`img/tabs/elite.jpg`, `Меню “Премиум”`, `В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!`, 550);
  const lentenMenuCard = new MenuForTheDayCard(`img/tabs/post.jpg`, `Меню "Постное"`, `Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.`, 430);
  wrapperMenuCards.insertAdjacentHTML("beforeend", fitnessMenuCard.innerHtml);
  wrapperMenuCards.insertAdjacentHTML("beforeend", premiumMenuCard.innerHtml);
  wrapperMenuCards.insertAdjacentHTML("beforeend", lentenMenuCard.innerHtml); //////////////////////////////////////////////////////////	
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
  /////////* functions */////////
  // for Tabs

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

  function setTabsIndex() {
    //для сопоставления таба и контента
    tabs.forEach((tab, i) => {
      tab.dataset.index = i;
    });
  } // for Countdown Time Promotion


  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

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
  } // for modal


  function openModal() {
    modal.classList.add("modal_show");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimerId);
  }

  function closeModal() {
    modal.classList.remove("modal_show");
    document.body.style.overflow = "";
  }
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map