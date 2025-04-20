const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
const apiKey = "&appid=379e7e8a9a10eb7c41a3681459e24a3b";
let cityName = "";
var data;

async function fetchWeatherJSON() {
  const response = await fetch(apiURL + apiKey + `&q=${cityName}`);

  if (!response.ok || response.status == 404) {
    document.querySelector(".errormsg").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.floor(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML =Math.floor(data.main.humidity) + "%";
    document.querySelector(".Wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clear") {
      document.querySelector(".weather-icon").src = "image/clear.png";
    } else if (data.weather[0].main == "Clouds") {
      document.querySelector(".weather-icon").src = "image/clouds.png";
    } else if (data.weather[0].main == "Rain") {
      document.querySelector(".weather-icon").src = "image/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      document.querySelector(".weather-icon").src = "image/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      document.querySelector(".weather-icon").src = "image/mist.png";
    } else if (data.weather[0].main == "Snow") {
      document.querySelector(".weather-icon").src = "image/snow.png";
    } else if (data.weather[0].main == "Wind") {
      document.querySelector(".weather-icon").src = "image/wind.png";
    } else if (data.weather[0].main == "Humidity") {
      document.querySelector(".weather-icon").src = "image/humidity.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".errormsg").style.display = "none";
  }
}

function fetchCityName() {
  cityName = document.getElementById("serchCity").value;
  fetchWeatherJSON(".city");
}
