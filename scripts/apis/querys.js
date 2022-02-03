import { showCurrentWeather } from "./api-querys/api-weather.js";
import { showDadJoke } from "./api-querys/api-dad-joke.js";
import { showChuckJoke } from "./api-querys/api-chuck-joke.js";
//FUNCION: usada en 'main.ts' al inicio de la aplicación
export function getCurrentWeather(lang = "en") {
    showCurrentWeather(lang);
}
// FUNCION: usada en 'main.ts' por el elemento (botón) 'btnNext'
export function getShowAndPrintARandomJoke(jokeList) {
    if (Math.random() < 0.5) {
        showDadJoke(jokeList);
    }
    else {
        showChuckJoke(jokeList);
    }
}
