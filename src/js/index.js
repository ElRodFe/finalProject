import { footerYear, getDataFromJsonFile } from "./utils.mjs";

const jsonURL = "https://raw.githubusercontent.com/ElRodFe/finalProject/main/src/json/countries.json";
const selectElement = document.querySelector("#options");

footerYear();
getDataFromJsonFile(jsonURL);

const button = document.querySelector("#checkWeather");
button.addEventListener("click", () => {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const countryIndex = selectedOption.id;
    console.log(countryIndex);
})