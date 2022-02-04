// DECORDADOR: muestra el clima actual
export function updateUiWeather(constructor: Function){
    constructor.prototype.updateUiWeather = function() {

        console.log(this.getTemp());

        let resultToShow: string = this.showTemp();

        let iconToShow: string = this.getIcon();

        let elementDIVH4: HTMLElement | null = document.getElementById('current_weather');
        if (elementDIVH4 != null) elementDIVH4.innerText = resultToShow;

        let imageWeather: HTMLImageElement | null = document.querySelector("#image-weather");
        if (imageWeather != null) imageWeather.src = iconToShow;
    }
}