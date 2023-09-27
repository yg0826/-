const API_KEYS = "8e70ae486d135487ac5f3a2874db3353";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEYS}&unit:metrix`;
  fetch(url)
    .then((reponse) => reponse.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("we can't find your location");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
