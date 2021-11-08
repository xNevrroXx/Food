import {deleteNotDigits} from "./universalFunctions";


function calculatingCalorie() { // calculating calorieAllowance
    const calculatingWrapper = document.querySelector(".calculating__field"),
        genderWrapper = calculatingWrapper.querySelector("#gender"),
        valueBodyWrapper = calculatingWrapper.querySelector("#bodyValue"),
        activityWrapper = calculatingWrapper.querySelector("#activity"),
        heigthSm = valueBodyWrapper.querySelector("#height"),
        weightKg = valueBodyWrapper.querySelector("#weight"),
        age = valueBodyWrapper.querySelector("#age"),
        calculatingResult = calculatingWrapper.querySelector(".calculating__result span");


    let inputGender = "female",
        inputActivity = "small",
        BMR,
        calorieAllowance;

    getLocalStorageValues();
    calculatingCalorieAllowance();

    genderWrapper.addEventListener("click", (e) => {
        const target = e.target,
            calculatingChoose = genderWrapper.querySelectorAll(".calculating__choose-item");

        if (target.classList.contains("calculating__choose-item") &&
            !target.classList.contains("calculating__choose-item_active")) {
            inputGender = target.dataset.gender;

            calculatingChoose.forEach(element => {
                element.classList.toggle("calculating__choose-item_active");
                // element.classList.remove("calculating__choose-item_active");
                // if(target == element) element.classList.add("calculating__choose-item_active");
            });
        }

        calculatingCalorieAllowance();
    });

    activityWrapper.addEventListener("click", (e) => {
        const target = e.target,
            activityValue = activityWrapper.querySelectorAll(".calculating__choose-item");

        if (target.classList.contains("calculating__choose-item") &&
            !target.classList.contains("calculating__choose-item_active")) {
            inputActivity = target.id;

            activityValue.forEach(element => {
                element.classList.remove("calculating__choose-item_active");
                if (target == element) element.classList.add("calculating__choose-item_active");
            });
        }

        calculatingCalorieAllowance();
    });

    valueBodyWrapper.addEventListener("input", () => {
        const valueBody = [heigthSm, weightKg, age];

        showBlankFields(valueBody);
        calculatingCalorieAllowance();
    });


    function calculatingCalorieAllowance() {
        setLocalStorageValues();

        if (heigthSm.value && weightKg.value && age.value) {
            switch (inputGender) {
                case "male":
                    BMR = 88.36 + (13.4 * weightKg.value) + (4.8 * heigthSm.value) - (5.7 * age.value);
                    break;
                case "female":
                    BMR = 447.6 + (9.2 * weightKg.value) + (3.1 * heigthSm.value) - (4.3 * age.value);
                    break;
            }


            switch (inputActivity) {
                case "low":
                    calorieAllowance = BMR * 1.2;
                    break;
                case "small":
                    calorieAllowance = BMR * 1.375;
                    break;
                case "medium":
                    calorieAllowance = BMR * 1.55;
                    break;
                case "high":
                    calorieAllowance = BMR * 1.725;
                    break;
            }

            calculatingResult.textContent = Math.round(calorieAllowance);
        } else {
            calculatingResult.textContent = "X";
        }
    }

    function showBlankFields(inputsArr) {
        inputsArr.forEach(element => {
            if (element.value == "") {
                element.style.border = "solid 2px red";
            } else {
                element.value = (deleteNotDigits(element.value));
                element.style.border = "";
            }
        });
    }

	function getLocalStorageValues() {
		inputGender = localStorage.getItem("inputGender") ? localStorage.getItem("inputGender") : inputGender;
		inputActivity = localStorage.getItem("inputActivity") ? localStorage.getItem("inputActivity") : inputActivity;
		heigthSm.value = localStorage.getItem("heigthSm.value") ? localStorage.getItem("heigthSm.value") : "";
		weightKg.value = localStorage.getItem("weightKg.value") ? localStorage.getItem("weightKg.value") : "";
		age.value = localStorage.getItem("age.value") ? localStorage.getItem("age.value") : "";

		document.querySelectorAll(".calculating__choose-item_active").forEach(element => {
			element.classList.remove("calculating__choose-item_active");
		});
		document.querySelector(`[data-gender="${inputGender}"]`).classList.add("calculating__choose-item_active");
		document.querySelector(`#${inputActivity}`).classList.add("calculating__choose-item_active");
	}

	function setLocalStorageValues() {
		localStorage.setItem("inputGender", inputGender);
		localStorage.setItem("inputActivity", inputActivity);
		localStorage.setItem("heigthSm.value", heigthSm.value);
		localStorage.setItem("weightKg.value", weightKg.value);
		localStorage.setItem("age.value", age.value);
	}
}

export default calculatingCalorie;