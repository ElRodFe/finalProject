export function footerYear() {
    const span = document.querySelector("#year");
    span.textContent = `${new Date().getFullYear()}`;
}