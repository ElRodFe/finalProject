import { footerYear, getDataFromJsonFile } from "./utils.mjs";

const jsonURL = "https://raw.githubusercontent.com/ElRodFe/finalProject/main/src/json/countries.json";

footerYear();
getDataFromJsonFile(jsonURL);
