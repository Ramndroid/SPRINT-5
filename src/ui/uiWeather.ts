// DECORDADOR: muestra el clima actual
export function updateUiWeather(constructor: Function){
    constructor.prototype.updateUiWeather = function() {

        let resultToShow: string = this.getTemp();

        console.log(resultToShow);

        let elementDIVH4: HTMLElement | null = document.getElementById('current_weather');
        if (elementDIVH4 != null) elementDIVH4.innerText = resultToShow;
    }
}