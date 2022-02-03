import { showCurrentWeather } from "./apis/api-weather.js";
import { showDadJoke } from "./apis/api-dad-joke.js";
import { showChuckJoke } from "./apis/api-chuck-joke.js";
import { ReportAcudits } from "./data/reportAcudits.js";
//FUNCION: usada en 'main.ts' al inicio de la aplicación
export function getCurrentWeather(lang = "en") {
    showCurrentWeather(lang);
}
// FUNCION: usada en 'main.ts' por el elemento (botón) 'btnNext'
export function getShowAndPrintARandomJoke() {
    if (ReportAcudits.getNext())
        showDadJoke();
    else
        showChuckJoke();
}
export function setScore(score) {
    ReportAcudits.SetScore = score;
}
export function pushJoke(joke) {
    ReportAcudits.Push(joke);
}
