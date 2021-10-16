
const tabs        = document.querySelectorAll(".tabheader__item"),
      tabsParent  = document.querySelector(".tabheader__items"),
      tabsContent = document.querySelectorAll(".tabcontent");

setTabsIndex();
tabsParent.addEventListener("click", (event) => {
  const clickedElement = event.target;
  toggleTabContent(clickedElement);
});





//functions
function toggleTabContent(clickedElement) {
  if( 
      clickedElement 
      && !clickedElement.classList.contains("tabheader__item_active") 
      && clickedElement.classList.contains("tabheader__item") 
      )
    {
      hideTabsContent();
      showTabsContent(clickedElement);
    }
}

function hideTabsContent() {
  tabs.forEach( (tab, i) => {
      tab.classList.remove("tabheader__item_active");
  });
  tabsContent.forEach( tabContent => {
      tabContent.classList.remove("tabcontent_active");
  });
}

function showTabsContent(tab) {
  tab.classList.add("tabheader__item_active");
  tabsContent[tab.dataset.index].classList.add("tabcontent_active");
}

function setTabsIndex() {
  tabs.forEach( (tab, i) => {
      tab.dataset.index = i;
  });
}