export function footerYear() {
    const span = document.querySelector("#year");
    span.textContent = `${new Date().getFullYear()}`;
}

export async function getDataFromJsonFile(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();

        populateOptions(data.countries);
    }
}

export function populateOptions(data) {
    const selectElement = document.querySelector("#options");

    data.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option.name;
        optionElement.textContent = `${option.name}`;
        selectElement.appendChild(optionElement);
    });
}