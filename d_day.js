const dDayBtn = document.querySelector("#d-day"),
    d_day_container = document.createElement("div");
    form = document.createElement("form"),
    input_event = document.createElement("input"),
    input_date = document.createElement("input"),
    date_container = document.createElement("div"),
    days_span = document.createElement("span");

const EVENT = "event";
const DATE = "date";
const SHOWING = "showing";

function formatTime(time) {
    return  Math.abs(time) < 10 ? (`0${Math.abs(time)}`) : Math.abs(time);
}

function getDday() {
    const today = new Date();
    const date = localStorage.getItem(DATE);
    const date_list = date.split('-');
    const d_day = new Date(parseInt(date_list[0]), parseInt(date_list[1]) - 1, parseInt(date_list[2]));
    const totalSeconds = (d_day - today) / 1000;


    const seconds = Math.floor(totalSeconds) % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / 3600 / 24);
    
    days_span.innerText = `${formatTime(days)} ${formatTime(hours)} ${formatTime(minutes)} ${formatTime(seconds)}`;

}

function printDday(event) {
    form.innerHTML = "";
    wrapper.innerHTML = "";
    const span = document.createElement("span");
    span.innerText = `D - ${event}`;
    d_day_container.appendChild(span);
    getDday();
    date_container.appendChild(days_span);
    d_day_container.appendChild(date_container);
    wrapper.appendChild(d_day_container);

    setInterval(getDday, 1000);
}

function saveDate(date) {
    localStorage.setItem(DATE, date);
}

function handleDateSubmit(event) {
    event.preventDefault();
    const currentDate = input_date.value;
    const getEvent = localStorage.getItem(EVENT);
    saveDate(currentDate);
    printDday(getEvent);
    
} 

function askDate() {
    form.innerHTML = "";
    wrapper.innerHTML = "";
    form.appendChild(input_date);
    d_day_container.appendChild(form);
    wrapper.appendChild(d_day_container);
    form.addEventListener("submit", handleDateSubmit);
}

function saveEvent(event) {
    localStorage.setItem(EVENT, event);
}

function handleEventSubmit(event) {
    event.preventDefault();
    const currentEvent = input_event.value;
    saveEvent(currentEvent);
    askDate();
}

function askEvent() {
    form.appendChild(input_event);
    d_day_container.appendChild(form);
    wrapper.appendChild(d_day_container);
    form.addEventListener("submit", handleEventSubmit);
}

function loadEventDay() {
    const event = localStorage.getItem(EVENT);
    const date = localStorage.getItem(DATE);
    if (event === null) {
        askEvent();
    } else if (date === null) {
        askDate();
    } else {
        printDday(event);
    }
}

function handleClick() {
    wrapper.innerHTML = "";
    loadEventDay();
}

function init() {
    dDayBtn.addEventListener('click', handleClick);
}

init();