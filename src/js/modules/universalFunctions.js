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

const getData = async (url) => {
    const result = await fetch(url);

    if(!result.ok) {
        throw new Error(`Could not fetch ${url}, status: ${result.status}`);
    }
    return await result.json();
};

export {setIndexes};
export {getZero};
export {deleteNotDigits};
export {getData};