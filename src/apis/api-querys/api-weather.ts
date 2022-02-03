import { Weather } from "../../models/weather.js";
import { getGeolocation } from "./api-geo.js";

const API_WEATHER_URL: string = "http://api.openweathermap.org/data/2.5/weather?";
const API_WEATHER_KEY: string = "86688be43dc200dacf76d7675b8bf229";

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

async function getWatherAndUpdate(lat: number, lon: number, lang: string): Promise<void> {
    try {
        const weather: Weather = <Weather> await doFetchWeather(lat, lon, lang);
        (<any>weather).updateUiWeather();
    } catch (err: any) {
        console.log(err.message);
    }
}

export function showCurrentWeather(lang: string): void {
    getGeolocation()
        .then(geoLoca => {
            getWatherAndUpdate(geoLoca.latitude, geoLoca.longitude, lang);
        })
        .catch(error => console.error(error.message));
}