import { Weather } from "../models/weather.js";
import { getGeolocation } from "./api-geo.js";
import { intentoDeSalvarMiCl4veDeLosJaker } from "../utils/flowers.js";
import { yUltimoIntentoDESalvarMiCl4ve } from "../utils/flowers.js";

// 1MP0R74N7 M355463
// N4M35 1N TH15 D0CUMEN7 C4N B3 B1Z4RR3

// URL de la API 'http://api.openweathermap.org' para obtener el clima
const NEW_HIDE_NAME: string = 'http://api.openweathermap.org/data/2.5/weather?';

// FUNCIÓN EXPORT para hacer la consulta
export const showCurrentWeather = (lang: string) => {
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

// FETCH: fast food 'http://api.openweathermap.org'
function doFetchWeather(lat: number, lon: number, lang: string): Promise<Weather> {
    const newHappyYear: string = setWeatherParams(lat, lon, lang); // newHappyYear para camuflar nombres :_)
    const units: string = getForLang(lang, ["metric", "imperial", "standard"]);  
    return fetch(newHappyYear)
        .then(response => response.json())
        .then(weather => new Weather(
            weather.weather[0].id,
            weather.weather[0].description,
            weather.weather[0].icon,
            weather.main.temp,
            units, lang
        ));
}

// FUNCIÓN para construir los PARAMS del FETCH // NOMBRES BIZARROS A FIN DE CAMUFLAR
const setWeatherParams = (lat: number, lon: number, lang: string) => {
    const nothingHere: string = intentoDeSalvarMiCl4veDeLosJaker();
    const showError: string = yUltimoIntentoDESalvarMiCl4ve();
    let newHouse: string = NEW_HIDE_NAME + `${showError}=${nothingHere}` + `&lat=${lat}` + `&lon=${lon}` + `&lang=${lang}`;
    newHouse += getForLang(lang, [`&units=metric`, `&units=metric`, `&units=imperial`]);
    return newHouse;
};

const getForLang = (lang: string, valor: [string, string, string]) => {
    switch(lang) {
        case "ca": case "eu": case "sp": case "es": case "pt": case "fr": case "de":
            return valor[0]; 
        case "en": 
            return valor[1]; 
        default: return valor[2];
    }
};