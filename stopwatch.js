const startBtn = document.querySelector("#start"),
    stopBtn = document.querySelector("#stop"),
    min = document.querySelector(".js-min"),
    sec = document.querySelector(".js-sec"),
    milsec = document.querySelector(".js-mil");

var startTime = 0;
var endTime = 0;
var timerStart;

var m;
var s;
var mil;

function handleStart() {

    if(!startTime) {
        startTime = Date.now();
    } else {
        stopBtn.innerText = 'STOP';
        startTime += (Date.now() - endTime);
    }

    timerStart = setInterval(function() {
        var nowTime = new Date(Date.now() - startTime);

        m = addZero(nowTime.getMinutes());
        s = addZero(nowTime.getSeconds());
        mil = addZero(Math.floor(nowTime.getMilliseconds() / 10));

        min.innerText = m
        sec.innerText = s
        milsec.innerText = mil

    }, 1);
}

function handleStop() {
    if(timerStart) {
        clearInterval(timerStart)

        if(this.innerText == 'STOP') {
            endTime = Date.now()
            stopBtn.innerText = 'RESET';
            startBtn.innerText = 'RESTART';
        } else {
            handleReset();
        }
        
    }
}

function handleReset() {
    startTime = 0;
    m = 0;
    s = 0;
    mil = 0;

    min.innerText = '00';
    sec.innerText = '00';
    milsec.innerText = '00';

    startBtn.innerText = 'START';
    stopBtn.innerText = 'STOP';
    timerStart = null;
}

function addZero(num) {
    return (num < 10 ? `0${num}` : `${num}`);
} 

function handleClick() {
    const page_style = document.querySelector("#page-style");
    page_style.href = "stopwatch.css";
    startBtn.addEventListener('click', handleStart);
    stopBtn.addEventListener('click', handleStop);
}

function init() {
    stopwatch.addEventListener('click', handleClick);
}

init();