import { showCurrentWeather } from "./api-querys/api-weather.js";
import { showDadJoke } from "./api-querys/api-dad-joke.js";
//FUNCION: obtener clima actual
export function getCurrentWeather(lang = "en") {
    showCurrentWeather(lang);
}
// FUNCION: usada en 'main.ts' por el elemento (botón) 'btnNext'
export function getShowAndPrintARandomJoke(jokeList) {
    showDadJoke(jokeList);
}
