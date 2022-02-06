import { showCurrentWeather } from "./apis/api-weather.js";
import { showDadJoke } from "./apis/api-dad-joke.js";
import { showChuckJoke } from "./apis/api-chuck-joke.js";
import { ReportAcudits } from "./data/reportAcudits.js";
import { Joke } from "./models/joke.js";

//FUNCION usada en 'main.ts'
export const getCurrentWeather = () => { showCurrentWeather("ca") }

// FUNCION usada en 'main.ts'
export const setScore = (score: number) => { ReportAcudits.SetScore = score } ;

// FUNCION usada en 'main.ts'
export function getShowAndPrintARandomJoke(): void {
    if (ReportAcudits.getNext())
        showDadJoke();
    else
        showChuckJoke();
}

// FUNCION usada en 'api-chuck-joke.ts' y 'api-dad-joke.ts'
export const pushJoke = (joke: Joke) => { ReportAcudits.Push(joke) };