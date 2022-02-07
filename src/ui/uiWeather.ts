// DECORDADOR: muestra el clima actual
export function updateUiWeather(constructor: Function): void {
    constructor.prototype.updateUiWeather = function() {
        console.log(this.getTemp());
        setHTML(this.showTemp(), this.getIcon());                
    }
}

function setHTML(resultToShow: string, iconToShow: string): void {
    setHTMLCurrentTemp(resultToShow);
    setHTMLCurrentTempIcon(iconToShow);
    setHTMLCurrentWeatherVisible();
}

function setHTMLCurrentTemp(resultToShow: string): void {
    const elementDIVH4: HTMLElement | null = document.getElementById('current_weather');
    if (elementDIVH4 != null)
        elementDIVH4.innerText = resultToShow;
}

function setHTMLCurrentTempIcon(iconToShow: string): void {
    const imageWeather: HTMLImageElement | null = document.querySelector("#image-weather");
    if (imageWeather != null)
        imageWeather.src = iconToShow;
}

function setHTMLCurrentWeatherVisible(): void {
    const element: HTMLElement | null = document.querySelector('#weather');
    element?.classList.replace("contenedor-clima-off", "contenedor-clima-on");
}