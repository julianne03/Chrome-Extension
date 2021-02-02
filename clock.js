const clockBtn = document.querySelector("#clock");
const wrapper = document.querySelector(".wrapper");

const div = document.createElement("div");
const span = document.createElement("span");
const todayDiv = document.createElement("div");
const todaySpan = document.createElement("span");

function showClock() {

    div.classList.add("js-clock-container");
    span.classList.add("js-clock");
    todayDiv.classList.add("js-today-container");
    todaySpan.classList.add("js-today");

    div.appendChild(span);
    wrapper.appendChild(div);
    todayDiv.appendChild(todaySpan);
    wrapper.appendChild(todayDiv);

    getTime();
    setInterval(getTime, 1000);
}

function getTime() {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekList = ['Sun','Mon','Tue','Wed','Thr','Fri','Sat'];
    const dayname = weekList[date.getDay()];

    span.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds} ${ampm}`;
    todaySpan.innerText = `${year}-${month}-${day}, ${dayname}`;    
}

function handleClick() {
    wrapper.innerHTML = "";
    showClock();
}

function init() {
    showClock();
    clockBtn.addEventListener("click", handleClick);
}
init();