const today = document.querySelector(".js-today");

function getToday() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekList = ['Sun','Mon','Tue','Wed','Thr','Fri','Sat'];
    const dayname = weekList[date.getDay()];

    today.innerText = `${year}-${month}-${day}, ${dayname}`;
}

function init() {
    getToday();
}
init();