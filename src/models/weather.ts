import { IWeather } from "./interfaces/iweather.js";
import { updateUiWeather } from "../ui/uiWeather.js";

// CLASE Weather: modelo para la api climática
@updateUiWeather
export class Weather implements IWeather {
    constructor(
        public id: number,
        public description: string,
        public icon: string,
        public temp: number,
        public units: string,
        public lang: string
    ) { }

    getTemp(): string {
        let response: string = "";
        
        switch (this.lang) {
            case "ca":
                response = "Avui:";
                break;
            case "es":
            case "sp":
                response = "Hoy:";
                break;
            default:
                response = "Today:";
                break;
        }

        response += ` ${this.description} |`;

        switch (this.units) {
            case "metric": response += ` ${this.temp.toFixed(0)}º C`; break;
            case "imperial": response += ` ${this.temp}º F`; break;
            default: response += ` ${this.temp}º K`; break;
        }

        return response;
    }

    showTemp(): string {
        let response: string = "";
        switch (this.units) {
            case "metric": response += `${this.temp.toFixed(0)}º C`; break;
            case "imperial": response += `${this.temp}º F`; break;
            default: response += `${this.temp}º K`; break;
        }

        return response;
    }

    getIcon(): string {
        return  `assets/weather/${this.icon.replace('n', 'd')}.png`;
    }
    
}