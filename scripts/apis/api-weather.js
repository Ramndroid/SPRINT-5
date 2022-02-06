var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Weather } from "../models/weather.js";
import { getGeolocation } from "./api-geo.js";
// 1MP0R74N7 M355463
// N4M35 1N TH15 D0CUMEN7 C4N B3 B1Z4RR3
// URL de la API 'http://api.openweathermap.org' para obtener el clima
const NEW_HIDE_NAME = 'http://api.openweathermap.org/data/2.5/weather?';
// FUNCIÓN EXPORT para hacer la consulta
export const showCurrentWeather = (lang) => {
    getGeolocation()
        .then(geoLoca => {
        getWatherAndUpdate(geoLoca.latitude, geoLoca.longitude, lang);
    })
        .catch(error => console.error(error.message));
};
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
// FETCH: fast food 'http://api.openweathermap.org'
function doFetchWeather(lat, lon, lang) {
    let newHappyYear = setWeatherParams(lat, lon, lang);
    let units = getUnitsForLang(lang);
    return fetch(newHappyYear)
        .then(response => response.json())
        .then(weather => new Weather(weather.weather[0].id, weather.weather[0].description, weather.weather[0].icon, weather.main.temp, units, lang));
}
// FUNCIÓN para construir los PARAMS del FETCH
const setWeatherParams = (lat, lon, lang) => {
    let nothingHere = intentoDeSalvarMiCl4veDeLosJaker();
    let showError = yUltimoIntentoDESalvarMiCl4ve();
    let newHouse = NEW_HIDE_NAME + `${showError}=${nothingHere}` + `&lat=${lat}` + `&lon=${lon}` + `&lang=${lang}`;
    switch (lang) {
        case "ca":
        case "eu":
        case "sp":
        case "es":
        case "pt":
        case "fr":
        case "de":
            newHouse += `&units=metric`;
            break;
        case "en":
            newHouse += `&units=imperial`;
            break;
    }
    return newHouse;
};
const getUnitsForLang = (lang) => {
    switch (lang) {
        case "ca":
        case "eu":
        case "sp":
        case "es":
        case "pt":
        case "fr":
        case "de":
            return "metric";
        case "en":
            return "imperial";
        default: return "standard";
    }
};
// TODO: fix the bug
const intentoDeSalvarMiCl4veDeLosJaker = () => {
    let SIPld9 = "f229";
    let HJSajkffd = "8668";
    let Joks8d8 = "5b8b";
    let cdjskaf = "8be4";
    let eaogdsgI = "3dc2";
    let sadpvsa0s = "d767";
    let Hu9ss = "00da";
    let dkfjpae = "cf76";
    let FODa33 = HJSajkffd.concat(cdjskaf).concat(eaogdsgI).concat(Hu9ss).concat(dkfjpae).concat(sadpvsa0s).concat(Joks8d8).concat(SIPld9);
    return FODa33;
};
// TODO: update this
const yUltimoIntentoDESalvarMiCl4ve = () => {
    let myFavColor = "d";
    let thisIsNotALet = "p";
    let happyClient = "essum";
    let ladyGagaSong = "i";
    let picassoIsNotArt = "a";
    let sumADD = `${happyClient.replace("m", myFavColor).replace("s", thisIsNotALet).replace("s", thisIsNotALet).replace("e", picassoIsNotArt).replace("u", ladyGagaSong)}`;
    return sumADD;
};
