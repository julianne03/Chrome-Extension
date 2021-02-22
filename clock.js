function showClock() {
    getTime();
    setInterval(getTime, 1000);
}

function getTime() {

    const date_text = document.querySelector(".date-text"),
        time_text = document.querySelector(".time-text");

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

    time_text.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds} ${ampm}`;
    date_text.innerText = `${year}-${month}-${day}, ${dayname}`;    
}

function handleClick() {
    showClock();
}

function init() {
    showClock();
    clock.addEventListener("click", handleClick);
}
init();