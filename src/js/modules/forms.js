import {closeModal, showThanksModal} from "./modal";


function forms(modalSelector) {
    // forms
    const forms = document.querySelectorAll("form"),
          messages = {
              loading: "icons/spinner.svg",
              success: "Спасибо! Мы скоро с Вами свяжемся",
              failure: "Что-то пошло не так..."
          },
          modal = document.querySelector(modalSelector);

    forms.forEach(form => {
        bindPostData(form);
    });

    const postData = async (url, data) => {
        const result = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: data
        });

        return await result.json();
    };

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