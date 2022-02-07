// DECORDADOR: muestra el clima actual
export function updateUiWeather(constructor) {
    constructor.prototype.updateUiWeather = function () {
        console.log(this.getTemp());
        setHTML(this.showTemp(), this.getIcon());
    };
}
function setHTML(resultToShow, iconToShow) {
    setHTMLCurrentTemp(resultToShow);
    setHTMLCurrentTempIcon(iconToShow);
    setHTMLCurrentWeatherVisible();
}
function setHTMLCurrentTemp(resultToShow) {
    const elementDIVH4 = document.getElementById('current_weather');
    if (elementDIVH4 != null)
        elementDIVH4.innerText = resultToShow;
}
function setHTMLCurrentTempIcon(iconToShow) {
    const imageWeather = document.querySelector("#image-weather");
    if (imageWeather != null)
        imageWeather.src = iconToShow;
}
function setHTMLCurrentWeatherVisible() {
    const element = document.querySelector('#weather');
    element === null || element === void 0 ? void 0 : element.classList.replace("contenedor-clima-off", "contenedor-clima-on");
}
