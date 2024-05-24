import { footerYear, populateOptions } from "./utils.mjs";
import GetWeatherData from "./DisplayWeatherContent.mjs";

const jsonURL = "https://raw.githubusercontent.com/ElRodFe/finalProject/main/src/json/countries.json";
const selectElement = document.querySelector("#options");
const mainElement = document.querySelector("#content");

footerYear();
populateOptions(jsonURL, selectElement);

const button = document.querySelector("#checkWeather");
button.addEventListener("click", () => {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const countryIndex = selectedOption.id;

    GetWeatherData(jsonURL, countryIndex, mainElement);
})