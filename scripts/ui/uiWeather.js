// DECORDADOR: muestra el clima actual
export function updateUiWeather(constructor) {
    constructor.prototype.updateUiWeather = function () {
        console.log(this.getTemp());
        let resultToShow = this.showTemp();
        let iconToShow = this.getIcon();
        let elementDIVH4 = document.getElementById('current_weather');
        if (elementDIVH4 != null)
            elementDIVH4.innerText = resultToShow;
        let imageWeather = document.querySelector("#image-weather");
        if (imageWeather != null)
            imageWeather.src = iconToShow;
    };
}
