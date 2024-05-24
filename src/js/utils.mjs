export function footerYear() {
    const span = document.querySelector("#year");
    span.textContent = `${new Date().getFullYear()}`;
}

export async function getDataFromJsonFile(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();

        return data
    }
}

export async function getCountryData(url, countryIndex) {
    const data = await getDataFromJsonFile(url);
    const countryData = data.countries[parseInt(countryIndex)];

    return countryData;
}

export async function populateOptions(url, selectElement) {
    const data = await getDataFromJsonFile(url);

    data.countries.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option.name;
        optionElement.textContent = `${option.name}`;
        optionElement.id = option.id;

        selectElement.appendChild(optionElement);
    });
}