// DECORDADOR: muestra el clima actual
export function updateUiWeather(constructor) {
    constructor.prototype.updateUiWeather = function () {
        let resultToShow = this.getTemp();
        console.log(resultToShow);
        let elementDIVH4 = document.getElementById('current_weather');
        if (elementDIVH4 != null)
            elementDIVH4.innerText = resultToShow;
    };
}
