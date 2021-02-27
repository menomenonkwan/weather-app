// api - openweathermap.org
const api = {
  key: "78defb4508e81c71d02c90d70d1319d4",
  base: "http://api.openweathermap.org/data/2.5/"
}
const searchBox = document.querySelector('.search-box');
let city = document.querySelector('.current-temp .city');
let temp = document.querySelector('.current-temp .temp');
let feelsLikeTemp = document.querySelector('.current-temp .feels-like');
let weatherIcon = document.querySelector('.current-temp .weather-icon');
let description = document.querySelector('.current-temp .weather-desc');
let range = document.querySelector('.current-temp .temp-range');;

// calculates fahrenheit from celsius
function toFahrenheit(celsius) {
  return Math.floor((celsius * 9/5) + 32);
}

// displays information on webpage
function displayWeather(weather) {
  city.textContent = `${weather.name}, ${weather.sys.country}`;
  temp.innerHTML = `${toFahrenheit(weather.main.temp)}<span>°F</span>`;
  feelsLikeTemp.innerText = `Feels like ${toFahrenheit(weather.main.feels_like)}°F`;
  weatherIcon.innerHTML = `<img src="icons/${weather.weather[0].icon}.png"/>`;
  description.textContent = `${weather.weather[0].description}`;
  range.innerText = `${toFahrenheit(weather.main.temp_min)}°F / ${toFahrenheit(weather.main.temp_max)}°F`;
}

// takes in city name and sends/returns request from openweathermap.com
function getWeather(city) {
  fetch(`${api.base}weather?q=${city}&units=metric&appid=${api.key}`)
    .then(weather => { 
      return weather.json();
    }).then(displayWeather);
}

// checks if "Enter" was pressed and passes entered value to getWeather
function searchCity(event) {
  if (event.keyCode === 13) {
    getWeather(searchBox.value)
  }
}

searchBox.addEventListener('keypress', searchCity);

// start with a default weather
getWeather('Marina Del Rey');


