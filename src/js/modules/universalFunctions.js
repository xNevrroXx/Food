//universal
function setIndexes(elementsArr) { //для сопоставления таба/слайда и контента
    elementsArr.forEach((element, i) => {
        element.dataset.index = i;
    });
}

function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function deleteNotDigits(str) {
    return str.replace(/\D/gi, "");
}

function toFloatNumber(str) {
    return str.replace(/[^\d,.]/g, '');
}
export {setIndexes};
export {getZero};
export {deleteNotDigits};
export {toFloatNumber};














































