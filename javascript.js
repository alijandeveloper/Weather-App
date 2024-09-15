const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("search-btn");
const weatherImg = document.querySelector(".weather-image");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");


async function chackWeather(city){
    const api_key = "4f02a3b1678d93b9a6f087259c482e57"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weather_data = await fetch(`${url}`).then(response => response.json());
    // console.log(weather_data);
}

searchBtn.addEventListener('click', ()=> {
    chackWeather(inputBox.value);
});