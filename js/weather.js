const COORDS = 'COORDS';
const temperature_text = document.querySelector(".weather-temperature");
const temperature_icon = document.querySelector("#weather-icon");

function iconSelector(icon_id) {
    var dict = {
        '01d' : 'wi wi-day-sunny',
        '02d' : 'wi wi-day-cloudy',
        '03d' : 'wi wi-cloud',
        '04d' : 'wi wi-cloudy',
        '09d' : 'wi wi-day-showers',
        '10d' : 'wi wi-day-rain',
        '11d' : 'wi wi-thunderstorm',
        '13d' : 'wi wi-snow',
        '50d' : 'wi wi-fog',
        '01n' : 'wi wi-night-clear',
        '02n' : 'wi wi-night-alt-cloudy',
        '03n' : 'wi wi-cloud',
        '04n' : 'wi wi-cloudy',
        '09n' : 'wi-night-alt-showers',
        '10n' : 'wi-night-alt-rain',
        '11n' : 'wi wi-thunderstorm',
        '13n' : 'wi wi-snow',
        '50n' : 'wi wi-fog'
    }

    temperature_icon.className = dict[icon_id];
    console.log(temperature_icon.className);


    
}

function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        return response.json();
    }).then(function(json) {
        const temperature = json.main.temp;
        const icon = json.weather[0].icon;
        const place = json.name;
        temperature_text.innerText = `${place}, ${temperature}`;
        iconSelector(icon);
    })
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(error) {
    console.log(error);
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null || loadedCoords === 'undifined') {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();