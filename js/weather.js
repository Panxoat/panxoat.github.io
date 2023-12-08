const weather = document.getElementById("weather");
const weatherIcon = document.getElementById("weather_icon");
const temperature = document.getElementById("temperature");

const API_KEY = "a24a83d36f194044d7fd0d0f0f62effb";

function getWeatherAPI(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const icon = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;

      weather.innerText = data.name;
      weatherIcon.style.width = "30px";
      weatherIcon.style.height = "30px";
      weatherIcon.style.backgroundImage = `url(${iconUrl})`;
      weatherIcon.style.backgroundPosition = "center center";

      temperature.innerText = `${data.main.temp}°`;
    });
}

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  getWeatherAPI(lat, lon);
}

function onGeoError(e) {
  console.error("We can't provide weather info to you", e);
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError, {
  timeout: 10000,
});
