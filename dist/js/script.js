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
  //tabs
  const tabs = document.querySelectorAll(".tabheader__item"),
        tabsParent = document.querySelector(".tabheader__items"),
        tabsContent = document.querySelectorAll(".tabcontent");
  setTabsIndex();
  tabsParent.addEventListener("click", event => {
    const clickedElement = event.target;
    toggleTabContent(clickedElement);
  }); //countdown(обратный отсчет времени)

  const endDatePromotion = '2021-10-31',
        daysBlock = document.getElementById("days"),
        hoursBlock = document.getElementById("hours"),
        minutesBlock = document.getElementById("minutes"),
        secondsBlock = document.getElementById("seconds");
  const countdown = setInterval(initCountdown(endDatePromotion), 1000); /////////* functions */////////
  // forTabs

  function toggleTabContent(clickedElement) {
    if (clickedElement && !clickedElement.classList.contains("tabheader__item_active") && clickedElement.classList.contains("tabheader__item")) {
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
  } //forCountdownTimePromotion


  function initCountdown(endDatePromotion) {
    return () => {
      const remainderTime = setRemainderTimeObj(endDatePromotion);
      changePromoTimeAtPage(remainderTime);
      changeTxtContentUnderTime(daysBlock, hoursBlock, minutesBlock, secondsBlock);
    };
  }

  function setRemainderTimeObj(endDatePromotionStr) {
    const remainderTimeMS = Date.parse(endDatePromotionStr) - new Date(),
          days = Math.floor(remainderTimeMS / (1000 * 60 * 60 * 24)),
          hours = Math.floor(remainderTimeMS / (1000 * 60 * 60) % 24),
          minutes = Math.floor(remainderTimeMS / (1000 * 60) % 60),
          seconds = Math.floor(remainderTimeMS / 1000 % 60);
    return {
      "days": days,
      "hours": hours,
      "minutes": minutes,
      "seconds": seconds
    };
  }

  function changePromoTimeAtPage(remainderTimeObj) {
    daysBlock.textContent = remainderTimeObj.days;
    hoursBlock.textContent = remainderTimeObj.hours;
    minutesBlock.textContent = remainderTimeObj.minutes;
    secondsBlock.textContent = remainderTimeObj.seconds;
  }

  function changeTxtContentUnderTime(daysBlock, hoursBlock, minutesBlock, secondsBlock) {
    //меняет окончания слов времени
    changeTxtContentUnderHours(secondsBlock.parentElement);
    changeTxtContentUnderMinutes(minutesBlock.parentElement);
    changeTxtContentUnderHours(hoursBlock.parentElement);
    changeTxtContentUnderDays(daysBlock.parentElement);
  }

  function changeTxtContentUnderHours(elementParentSeconds) {
    if (elementParentSeconds.firstElementChild.textContent % 10 == 0 || elementParentSeconds.firstElementChild.textContent >= 5 && elementParentSeconds.firstElementChild.textContent <= 20) {
      elementParentSeconds.childNodes[2].textContent = "секунд";
    } else if (elementParentSeconds.firstElementChild.textContent % 10 == 1) {
      elementParentSeconds.childNodes[2].textContent = "секунда";
    } else if (elementParentSeconds.firstElementChild.textContent % 10 == 2 || elementParentSeconds.firstElementChild.textContent % 10 == 3 || elementParentSeconds.firstElementChild.textContent % 10 == 4) {
      elementParentSeconds.childNodes[2].textContent = "секунды";
    }
  }

  function changeTxtContentUnderMinutes(elementParentMinutes) {
    if (elementParentMinutes.firstElementChild.textContent % 10 == 0 || elementParentMinutes.firstElementChild.textContent >= 5 && elementParentMinutes.firstElementChild.textContent <= 20) {
      elementParentMinutes.childNodes[2].textContent = "минут";
    } else if (elementParentMinutes.firstElementChild.textContent % 10 == 1) {
      elementParentMinutes.childNodes[2].textContent = "минута";
    } else if (elementParentMinutes.firstElementChild.textContent % 10 == 2 || elementParentMinutes.firstElementChild.textContent % 10 == 3 || elementParentMinutes.firstElementChild.textContent % 10 == 4) {
      elementParentMinutes.childNodes[2].textContent = "минуты";
    }
  }

  function changeTxtContentUnderHours(elementParentHours) {
    if (elementParentHours.firstElementChild.textContent % 10 == 0 || elementParentHours.firstElementChild.textContent >= 5 && elementParentHours.firstElementChild.textContent <= 20) {
      elementParentHours.childNodes[2].textContent = "часов";
    } else if (elementParentHours.firstElementChild.textContent % 10 == 1) {
      elementParentHours.childNodes[2].textContent = "час";
    } else if (elementParentHours.firstElementChild.textContent % 10 == 2 || elementParentHours.firstElementChild.textContent % 10 == 3 || elementParentHours.firstElementChild.textContent % 10 == 4) {
      elementParentHours.childNodes[2].textContent = "часа";
    }
  }

  function changeTxtContentUnderDays(elementParentDays) {
    if (elementParentDays.firstElementChild.textContent % 10 == 0 || elementParentDays.firstElementChild.textContent >= 5 && elementParentDays.firstElementChild.textContent <= 20) {
      elementParentDays.childNodes[2].textContent = "дней";
    } else if (elementParentDays.firstElementChild.textContent % 10 == 1) {
      elementParentDays.childNodes[2].textContent = "день";
    } else if (elementParentDays.firstElementChild.textContent % 10 == 2 || elementParentDays.firstElementChild.textContent % 10 == 3 || elementParentDays.firstElementChild.textContent % 10 == 4) {
      elementParentDays.childNodes[2].textContent = "дня";
    }
  }
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map