import { getCountryData, getDataFromJsonFile } from "./utils.mjs";

const apiKey = "918a9b08387f62f77d54e582cc9ef367";

function weatherTemplate(data, day, i) {
    const list = data.list[i];
    const main = list.main;
    const weather = list.weather[0];

    return `<section>
    <h3>${day}</h3>
    <img src="https://openweathermap.org/img/w/${weather.icon}.png" alt="${weather.description}">
    <p>${weather.description}</p>
    <p>Temperature: ${main.temp}°F</p>
    <p>Windchill: ${main.feels_like}°F</p>
    <p>Humidity: ${main.humidity}%</p>
    </section>`
}

export default async function GetWeatherData(url, countryIndex, mainElement) {
    const country = await getCountryData(url, countryIndex);
    const openWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${country.lat}&lon=${country.long}&units=imperial&appid=${apiKey}`;
    const weatherData = await getDataFromJsonFile(openWeatherURL);

    displayWeather(weatherData, country, mainElement);
}

function displayWeather(weatherData, country, mainElement) {
    const div = document.createElement("div");

    const reloadButton = document.createElement("button");
    reloadButton.innerText = "Check Another Country"

    mainElement.innerHTML = "";

    const h2 = document.createElement("h2");
    h2.textContent = `${country.name}, ${weatherData.city.name}`;
    mainElement.appendChild(h2);

    div.insertAdjacentHTML("afterBegin", weatherTemplate(weatherData, "Past-Tomorrow", 16))
    div.insertAdjacentHTML("afterBegin", weatherTemplate(weatherData, "Tomorrow", 8))
    div.insertAdjacentHTML("afterBegin", weatherTemplate(weatherData, "Today", 0))

    mainElement.appendChild(div);
    mainElement.appendChild(reloadButton);

    reloadButton.addEventListener("click", e => {
        e.preventDefault
        location.reload();
    })
}