import {setIndexes} from "./universalFunctions";


function tabs() {
	const tabs = document.querySelectorAll(".tabheader__item"),
    tabsParent = document.querySelector(".tabheader__items"),
    tabsContent = document.querySelectorAll(".tabcontent");

    setIndexes(tabs);
    tabsParent.addEventListener("click", (event) => {
        const clickedElement = event.target;
        toggleTabContent(clickedElement);
    });



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
}

export default tabs;
