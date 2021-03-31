const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings"),
  nameContainer = document.querySelector(".js-name");

const USER_LS = "currentUser",
      SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);

}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  getTimeTxt();
  setInterval(getTimeTxt, 60000);   // every 1 hour
  const timeTxt = getTimeTxt();
  nameContainer.innerHTML = "";
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `${timeTxt}, ${text}.`;
}

function getTimeTxt() {
  const date = new Date();   // Object
  const hours = date.getHours();
  let timeTxt = "";
  console.log(hours);
  if (hours >= 6 && hours <= 10) {
    timeTxt = "Good Morning";
  } else if (hours <= 17) {
    timeTxt = "Good Afternoon";
  } else {
    timeTxt = "Good Evening";
  }

  return timeTxt;
}

// localStorage
// You can save small user's infomation in here. 
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}
function init() {
  loadName();
}

init();