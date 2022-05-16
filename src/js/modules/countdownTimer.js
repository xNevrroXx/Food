import {getZero} from "./universalFunctions";


function countdown() { // countdown(обратный отсчет времени)
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
			const remainderTimeMS = Date.parse(endDatePromotionStr) - (1000 * 60 * 60 * 3) - new Date(),
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
}

export default countdown;