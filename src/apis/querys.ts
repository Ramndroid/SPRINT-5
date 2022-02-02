import { showDadJoke } from "./api-dad-joke/query-api-dad-joke.js";
import { Joke } from "../models/joke/joke.js";

// FUNCION: usada en 'main.ts' por el elemento (botón) 'btnNext'
export function getShowAndPrintARandomJoke(jokeList: Joke[]) {
    showDadJoke(jokeList);
}