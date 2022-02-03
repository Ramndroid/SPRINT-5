import { showCurrentWeather } from "./api-querys/api-weather.js";
import { showDadJoke } from "./api-querys/api-dad-joke.js";
import { Joke } from "../models/joke.js";

//FUNCION: obtener clima actual
export function getCurrentWeather(lang: string = "en"): void {
    showCurrentWeather(lang);
}

// FUNCION: usada en 'main.ts' por el elemento (botón) 'btnNext'
export function getShowAndPrintARandomJoke(jokeList: Joke[]) {
    showDadJoke(jokeList);
}