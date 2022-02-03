import { Weather } from "../../models/weather.js";
import { getGeolocation } from "./api-geo.js";

// URL de la API 'http://api.openweathermap.org' para obtener el clima
const API_WEATHER_URL: string = 'http://api.openweathermap.org/data/2.5/weather?';

// APPY KEY:
const API_WEATHER_KEY: string = '86688be43dc200dacf76d7675b8bf229';

// FUNCIÓN EXPORT para hacer la consulta
export function showCurrentWeather(lang: string): void {
    getGeolocation()
        .then(geoLoca => {
            getWatherAndUpdate(geoLoca.latitude, geoLoca.longitude, lang);
        })
        .catch(error => console.error(error.message));
}

// ASYNC FUNCTION: lanza una petición a la api climática y muestra los resultados
async function getWatherAndUpdate(lat: number, lon: number, lang: string): Promise<void> {
    try {
        const weather: Weather = <Weather> await doFetchWeather(lat, lon, lang);
        (<any>weather).updateUiWeather();
    } catch (err: any) {
        console.log(err.message);
    }
}

// FETCH: api 'http://api.openweathermap.org'
function doFetchWeather(lat: number, lon: number, lang: string): Promise<Weather> {
    let urlApi: string = setWeatherParams(lat, lon, lang);

    let units: string = "";
    switch(lang) {
        case "ca": case "eu": case "sp": case "es": case "pt": case "fr": case "de":
            units = "metric"; break;
        case "en": 
            units = "imperial"; break;
    }

    return fetch(urlApi)
        .then(response => response.json())
        .then(weather => new Weather(
            weather.weather[0].id,
            weather.weather[0].description,
            weather.weather[0].icon,
            weather.main.temp,
            units,
            lang
        ))
}

// FUNCIÓN para construir los PARAMS del FETCH
function setWeatherParams(lat: number, lon: number, lang: string): string {
    let apiUrl: string =
         API_WEATHER_URL +
        `appid=${API_WEATHER_KEY}` +
        `&lat=${lat}` +
        `&lon=${lon}` +
        `&lang=${lang}`;

    switch (lang) {
        case "ca": case "eu": case "sp": case "es": case "pt": case "fr": case "de":
            apiUrl += `&units=metric`; break;
        case "en":
            apiUrl += `&units=imperial`; break;
    }

    return apiUrl;
}