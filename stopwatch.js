const stopwatchBtn = document.querySelector("#stopwatch");

const start = document.createElement("button");
    const pause = document.createElement("button");
    
    const buttonGroup = document.createElement("div");
    const min = document.createElement("span");
    const sec = document.createElement("span");
    const milsec = document.createElement("span");
    const dot = document.createElement("span");
    const dot2 = document.createElement("span");
    const recordListContainer = document.createElement("div");
    const ul = document.createElement('ul');

    let startTime = 0;
    let endTime = 0;
    let timerStart;

    var m;
    var s;
    var mil;

function showStopWatch() {

    const div = document.createElement("div");
    div.classList.add("js-stopwatch-container");
    min.innerText = "00";
    dot.innerText = ":";
    dot2.innerText = ":";
    sec.innerText = "00";
    milsec.innerText = "00";

    min.classList.add("js-stopwatch");
    sec.classList.add("js-stopwatch");
    milsec.classList.add("js-stopwatch");
    dot.classList.add("js-stopwatch");
    dot2.classList.add("js-stopwatch");
    recordListContainer.classList.add("record-list");

    div.appendChild(min);
    div.appendChild(dot);
    div.appendChild(sec);
    div.appendChild(dot2);
    div.appendChild(milsec);
    wrapper.appendChild(div);
    

    //add buttons
    start.innerText = "START";
    pause.innerText = "PAUSE";
    buttonGroup.classList.add("stopwatch-btn");
    start.classList.add("start");
    pause.classList.add("pause");
    wrapper.appendChild(buttonGroup);
    buttonGroup.appendChild(start);
    buttonGroup.appendChild(pause);
    recordListContainer.appendChild(ul);
    wrapper.appendChild(recordListContainer);
}

function handleStart() {

    if(this.innerText == 'RECORD' && mil) {
        const li = document.createElement('li');
        li.innerText = `${m} : ${s} : ${mil}`;
        if(!ul.firstChild) {
            ul.append(li);
        } else {
            ul.insertBefore(li, ul.firstChild);
        }
        return false
    }
    this.innerText = 'RECORD';

    if(!startTime) {
        startTime = Date.now();
    } else {
        pause.innerText = 'PAUSE';
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

        if(this.innerText == 'PAUSE') {
            endTime = Date.now()
            this.innerText = 'RESET';
            start.innerText = 'RESTART';
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

    start.innerText = 'START';
    pause.innerText = 'PAUSE';
    timerStart = null
    ul.innerHTML = '';
}

function addZero(num) {
    return (num < 10 ? `0${num}` : `${num}`)
} 

function handleClick() {
    wrapper.innerHTML = "";
    showStopWatch();
    
}

function init() {
    stopwatchBtn.addEventListener('click', handleClick);
    start.addEventListener('click', handleStart);
    pause.addEventListener('click', handleStop);
}

init();