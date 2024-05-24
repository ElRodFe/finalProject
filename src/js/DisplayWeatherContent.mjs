import { getCountryData, getDataFromJsonFile } from "./utils.mjs";

const apiKey = "918a9b08387f62f77d54e582cc9ef367";

function weatherTemplate(data, day, i) {
    const list = data.list[i];
    const main = list.main;
    const weather = list.weather[0];

    return `<section>
    <p>${day}</p>
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

    console.log(weatherData);
    displayWeather(weatherData, country, mainElement);
}

function displayWeather(weatherData, country, mainElement) {
    mainElement.innerHTML = "";
    const h2 = document.createElement("h2");
    h2.textContent = `${country.name}, ${weatherData.city.name}`;
    mainElement.appendChild(h2);

    mainElement.insertAdjacentHTML("afterEnd", weatherTemplate(weatherData, "Today", 0))



}