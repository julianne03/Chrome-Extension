const clockContainer = document.querySelector(".js-clock-container");
const clockText = document.querySelector(".js-clock");
function getTime() {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    clockText.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds} ${ampm}`;
}


function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();