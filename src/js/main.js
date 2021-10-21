window.addEventListener("DOMContentLoaded", () => {
	// tabs
	const tabs		  = document.querySelectorAll(".tabheader__item"),
		  tabsParent  = document.querySelector(".tabheader__items"),
		  tabsContent = document.querySelectorAll(".tabcontent");

		
	setTabsIndex();
	tabsParent.addEventListener("click", (event) => {
		const clickedElement = event.target;
		toggleTabContent(clickedElement);
	});

	// countdown(обратный отсчет времени)
	const endDatePromotion = '2021-10-31';
	initCountdown(".promotion__timer", endDatePromotion);
	window.addEventListener('wheel', (e) => {
		console.log(window.event || e);
	});
	

	// modal
	const modal = document.querySelector(".modal"),
		  modalShowElems = document.querySelectorAll("[data-modal-show]"),
		  modalCloseElems = document.querySelectorAll("[data-modal-close]");

	modalShowElems.forEach(showElemBtn => {
		showElemBtn.addEventListener("click", showModal);
	});
	modalCloseElems.forEach(closeElemBtn => {
		closeElemBtn.addEventListener("click", closeModal);
	});
	modal.addEventListener("click", (e) => {
		if(e.target == modal) {
			closeModal();
		}
	});
	document.addEventListener("keydown", (e) => {
		if(e.code == "Escape" && modal.classList.contains("modal_show")) {
			closeModal();
		}
	});

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

	
	/////////* functions */////////
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
	function setTabsIndex() { //для сопоставления таба и контента
		tabs.forEach((tab, i) => {
			tab.dataset.index = i;
		});
	}
	// for Countdown Time Promotion
	function getZero(num) {
		if( num >= 0 && num < 10 ) {
			return `0${num}`;
		} else {
			return num;
		}
	}
	function initCountdown(selectorWrapperTimer, endDatePromotion) {
		const timer 		   = document.querySelector(selectorWrapperTimer),
			  daysBlock	 	   = document.getElementById("days"),
			  hoursBlock   	   = document.getElementById("hours"),
			  minutesBlock 	   = document.getElementById("minutes"),
			  secondsBlock 	   = document.getElementById("seconds"),
			  timeInterval	   = setInterval( updateClock, 1000 );

		updateClock();

		function updateClock () {
			const remainderTime = getRemainderTimeObj(endDatePromotion);
			changePromoTimeAtPage(remainderTime);
			changeTxtContentUnderTime();

			if(remainderTime.fullTimeMS <= 0) {
				clearInterval(timeInterval);
			}
		}
		function getRemainderTimeObj(endDatePromotionStr) {
			const remainderTimeMS = Date.parse(endDatePromotionStr) - new Date(),
					days  = Math.floor(remainderTimeMS / (1000*60*60*24)),
					hours = Math.floor(remainderTimeMS / (1000*60*60) % 24),
					minutes = Math.floor(remainderTimeMS / (1000*60) % 60),
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
		function changeEndingWord (elementParentNum, arrWordForms) {
			if( elementParentNum.firstElementChild.textContent % 10 == 0 
				||  (elementParentNum.firstElementChild.textContent >= 5 
					&& 
					elementParentNum.firstElementChild.textContent <= 20)
			  ) {
				elementParentNum.childNodes[2].textContent = arrWordForms[0];
			} else if(elementParentNum.firstElementChild.textContent % 10 == 1) {
				elementParentNum.childNodes[2].textContent = arrWordForms[1];
			} else if(elementParentNum.firstElementChild.textContent % 10 == 2 
				|| elementParentNum.firstElementChild.textContent % 10 == 3
				|| elementParentNum.firstElementChild.textContent % 10 == 4 ) {
				elementParentNum.childNodes[2].textContent = arrWordForms[2];
			}
		}
	}

	// for modal
	function showModal() {
		modal.classList.add("modal_show");
		document.body.style.overflow = "hidden";
	}
	function closeModal() {
		modal.classList.remove("modal_show");
		document.body.style.overflow = "";
	}
});