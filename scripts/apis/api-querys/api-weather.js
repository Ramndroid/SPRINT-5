var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Weather } from "../../models/weather.js";
import { getGeolocation } from "./api-geo.js";
// URL de la API 'http://api.openweathermap.org' para obtener el clima
const API_WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?';
// APPY KEY:
const API_WEATHER_KEY = '86688be43dc200dacf76d7675b8bf229';
// FUNCIÓN EXPORT para hacer la consulta
export function showCurrentWeather(lang) {
    getGeolocation()
        .then(geoLoca => {
        getWatherAndUpdate(geoLoca.latitude, geoLoca.longitude, lang);
    })
        .catch(error => console.error(error.message));
}
// ASYNC FUNCTION: lanza una petición a la api climática y muestra los resultados
function getWatherAndUpdate(lat, lon, lang) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const weather = yield doFetchWeather(lat, lon, lang);
            weather.updateUiWeather();
        }
        catch (err) {
            console.log(err.message);
        }
    });
}
// FETCH: api 'http://api.openweathermap.org'
function doFetchWeather(lat, lon, lang) {
    let urlApi = setWeatherParams(lat, lon, lang);
    let units = "";
    switch (lang) {
        case "ca":
        case "eu":
        case "sp":
        case "es":
        case "pt":
        case "fr":
        case "de":
            units = "metric";
            break;
        case "en":
            units = "imperial";
            break;
    }
    return fetch(urlApi)
        .then(response => response.json())
        .then(weather => new Weather(weather.weather[0].id, weather.weather[0].description, weather.weather[0].icon, weather.main.temp, units, lang));
}
// FUNCIÓN para construir los PARAMS del FETCH
function setWeatherParams(lat, lon, lang) {
    let apiUrl = API_WEATHER_URL +
        `appid=${API_WEATHER_KEY}` +
        `&lat=${lat}` +
        `&lon=${lon}` +
        `&lang=${lang}`;
    switch (lang) {
        case "ca":
        case "eu":
        case "sp":
        case "es":
        case "pt":
        case "fr":
        case "de":
            apiUrl += `&units=metric`;
            break;
        case "en":
            apiUrl += `&units=imperial`;
            break;
    }
    return apiUrl;
}
