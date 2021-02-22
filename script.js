const body = document.querySelector("body"),
    clock = document.querySelector("#clock"),
    stopwatch = document.querySelector("#stopwatch"),
    d_day = document.querySelector("#d-day"),
    wrapper = document.querySelector(".wrapper");

const IMG_NUMBER = 5;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber+1}.jpg`;
    image.classList.add('bgImage');
    body.prepend(image);
}

function getRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNum = getRandom();
    paintImage(randomNum);
}

init();