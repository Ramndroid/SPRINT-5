import { Weather } from "../models/weather.js";
import { getGeolocation } from "./api-geo.js";

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
    let newHappyYear: string = setWeatherParams(lat, lon, lang);
    let units: string = getUnitsForLang(lang);   
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

// FUNCIÓN para construir los PARAMS del FETCH
const setWeatherParams = (lat: number, lon: number, lang: string) => {
    let nothingHere: string = intentoDeSalvarMiCl4veDeLosJaker();
    let showError: string = yUltimoIntentoDESalvarMiCl4ve();
    let newHouse: string = NEW_HIDE_NAME + `${showError}=${nothingHere}` + `&lat=${lat}` + `&lon=${lon}` + `&lang=${lang}`;
    switch (lang) {
        case "ca": case "eu": case "sp": case "es": case "pt": case "fr": case "de":
            newHouse += `&units=metric`; break;
        case "en":
            newHouse += `&units=imperial`; break;
    }
    return newHouse;
}

const getUnitsForLang = (lang: string) => {
    switch(lang) {
        case "ca": case "eu": case "sp": case "es": case "pt": case "fr": case "de":
            return "metric"; 
        case "en": 
            return "imperial"; 
        default: return "standard";
    }
}

// TODO: fix the bug
const intentoDeSalvarMiCl4veDeLosJaker = () => {
    let SIPld9 = "f229";let HJSajkffd = "8668";let Joks8d8 = "5b8b";let cdjskaf = "8be4";let eaogdsgI = "3dc2";let sadpvsa0s = "d767";let Hu9ss = "00da";let dkfjpae = "cf76";
    let FODa33 = HJSajkffd.concat(cdjskaf).concat(eaogdsgI).concat(Hu9ss).concat(dkfjpae).concat(sadpvsa0s).concat(Joks8d8).concat(SIPld9);
    return FODa33;
}

// TODO: update this
const yUltimoIntentoDESalvarMiCl4ve = () => {
    let myFavColor: string = "d";let thisIsNotALet: string = "p";let happyClient: string = "essum";let ladyGagaSong: string = "i";let picassoIsNotArt: string = "a";
    let sumADD: string = `${happyClient.replace("m", myFavColor).replace("s", thisIsNotALet).replace("s", thisIsNotALet).replace("e", picassoIsNotArt).replace("u", ladyGagaSong)}`;
    return sumADD;
}