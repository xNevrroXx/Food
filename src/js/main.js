'use strict';
import calculatingCalorie from "./modules/calculatingCalorie";
import cards from "./modules/cards";
import countdown from "./modules/countdownTimer";
import forms from "./modules/forms";
import modal from "./modules/modal";
import slider from "./modules/slider1.0";
import tabs from "./modules/tabs";
import {openModal} from "./modules/modal";

window.addEventListener("DOMContentLoaded", () => {
	const modalTimerId = setTimeout( () => openModal(".modal", modalTimerId), 20000);

	tabs();
	countdown();
	cards();
	modal(".modal", "[data-modal-show]", modalTimerId);
	forms("form", ".modal");
	slider(".slider");
	calculatingCalorie();

	// ".slider2".slider({
	// 	carousel: true,
	// 	numFirstSlider: 1,
	// 	btnPrevSelector: ".buttonPrev",
	// 	btnNextSelector: ".buttonNext",
	// 	counter: true,
	// 	navs: true,
	// 	// slidesToShow: 1,
	// 	// slidesToScroll: 1,
	// 	// autoPlay: false
	// });
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