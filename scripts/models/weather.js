var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { updateUiWeather } from "../ui/uiWeather.js";
// CLASE Weather: modelo para la api climática
let Weather = class Weather {
    constructor(id, description, icon, temp, units, lang) {
        this.id = id;
        this.description = description;
        this.icon = icon;
        this.temp = temp;
        this.units = units;
        this.lang = lang;
    }
    getTemp() {
        let response = "";
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
            case "metric":
                response += ` ${this.temp.toFixed(0)}º C`;
                break;
            case "imperial":
                response += ` ${this.temp}º F`;
                break;
            default:
                response += ` ${this.temp}º K`;
                break;
        }
        return response;
    }
    showTemp() {
        let response = "";
        switch (this.units) {
            case "metric":
                response += `${this.temp.toFixed(0)}º C`;
                break;
            case "imperial":
                response += `${this.temp}º F`;
                break;
            default:
                response += `${this.temp}º K`;
                break;
        }
        return response;
    }
    getIcon() {
        return `assets/weather/${this.icon.replace('n', 'd')}.svg`;
        // return  `assets/weather/50d.svg`; //// test svg
    }
};
Weather = __decorate([
    updateUiWeather,
    __metadata("design:paramtypes", [Number, String, String, Number, String, String])
], Weather);
export { Weather };
