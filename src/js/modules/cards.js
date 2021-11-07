import {getData} from "./universalFunctions";


function cards() {// dynamic layout menu card
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
}

export default cards;