const EVENT = "event";
const DATE = "date";

const d_day_container = document.querySelector(".js-d-day-container"),
    print_d_day = document.querySelector(".print-d-day"),
    span_event = document.querySelector(".event-text"),
    span_days = document.querySelector("#days"),
    span_hours = document.querySelector("#hours"),
    span_minutes = document.querySelector("#minutes"),
    span_seconds = document.querySelector("#seconds"),
    d_day_reset = document.querySelector(".d-day-reset");

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
    
    span_days.innerText = `${formatTime(days)}`;
    span_hours.innerText = `${formatTime(hours)}`;
    span_minutes.innerText = `${formatTime(minutes)}`;
    span_seconds.innerText = `${formatTime(seconds)}`;

}

function printDday(event, date) {
    const form = document.querySelector(".js-d-day-form");
    form.style.display = 'none';
    print_d_day.style.display = 'block';
    span_event.innerText = `D - ${event}`;
    getDday();
    setInterval(getDday, 1000);
}

function saveDday(event, date) {
    localStorage.setItem(EVENT, event);
    localStorage.setItem(DATE, date);
}

function handleEventSubmit(event) {
    event.preventDefault();
    const input_event = document.querySelector(".input-event");
    const input_date = document.querySelector(".input-date");
    const currentEvent = input_event.value;
    const currentDate = input_date.value;
    saveDday(currentEvent, currentDate);
    printDday(currentEvent, currentDate);
}

function askDday() {
    print_d_day.style.display = 'none';
    const form = document.querySelector(".js-d-day-form");
    form.style.display = 'block';
    const submit_btn = document.querySelector(".d-day-btn");
    submit_btn.addEventListener("click", handleEventSubmit);
}

function loadDday() {
    const event = localStorage.getItem(EVENT);
    const date = localStorage.getItem(DATE);

    if (event === null && date === null) {
        askDday();
    } else {
        printDday(event, date);
    }
}

function handleReset() {
    localStorage.clear();
    loadDday();
}

function handleClick() {
    const page_style = document.querySelector("#page-style");
    page_style.href = "d_day.css";
    loadDday();
}

function init() {
    d_day.addEventListener('click', handleClick);
    d_day_reset.addEventListener('click', handleReset);
}

init();