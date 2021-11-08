import {closeModal, showThanksModal} from "./modal";
import {postData} from "../services/services";

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

            postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);
                    loadingSpinner.remove();
                    form.reset();
                    if (modal.classList.contains("modal_show")) {
                        closeModal(modalSelector);
                    }
                    showThanksModal(messages.success, modalSelector);
                })
                .catch(() => {
                    showThanksModal(messages.failure, modalSelector);
                });
        });
    }
}

export default forms;