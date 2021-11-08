let booleanOpenThanksModal = false;


function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add("modal_show");
    document.body.style.overflow = "hidden";

    if(modalTimerId) clearInterval(modalTimerId);
}

function closeModal(modalSelector) {
    document.querySelectorAll(modalSelector).forEach( modal => {
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
            closeModal(modalSelector );
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

    document.addEventListener("click", (e) => {
        if (e.target == document.querySelector(".modal_show") || e.target.getAttribute("data-modal-close") == "") {
            closeModal(modalSelector, booleanOpenThanksModal);
        }
    });

    document.addEventListener("keydown", (e) => {
        if ( e.code == "Escape") {
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

export default modal;
export {openModal};
export {closeModal};
export {showThanksModal};