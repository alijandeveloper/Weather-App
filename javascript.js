const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("search-btn");
const weatherImg = document.querySelector(".weather-image");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
const locationNotFound = document.querySelector(".location-not-found");
const weatherBody = document.querySelector(".weather-body");

async function checkWeather(city) {
    const api_key = "4f02a3b1678d93b9a6f087259c482e57";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if (weather_data.cod === `404`) {
        locationNotFound.style.display = "flex";
        weatherBody.style.display = "none";
        console.log("error")
        return;
    }

    locationNotFound.style.display = "none";
    weatherBody.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    windSpeed.innerHTML = `${weather_data.wind.speed}Km/H`;

    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weatherImg.src = "images/cloud.png";
            break;
        case 'Clear':
            weatherImg.src = "images/clear.png";
            break;
        case 'Rain':
            weatherImg.src = "images/rain.png";
            break;
        case 'Mist':
            weatherImg.src = "images/mist.png";
            break;
        case 'Snow':
            weatherImg.src = "images/snow.png";
            break;
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});
