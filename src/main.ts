import { getShowAndPrintARandomJoke } from "./apis/querys.js";
import { Joke } from "./models/joke/joke.js";

// REPORTACUDITS: array de jokes con las valoraciones
const reportAcudits: Joke[] = [];

// API DAD-JOKE: recoge un chiste al cargar la web
getShowAndPrintARandomJoke(reportAcudits);

// ELEMENT: representa el botón "següent"
const btnNext: Element | null = document.querySelector('#btn_next');

// EVENTLISTENER: botón 'btnNext', click: obtiene y muestra una broma por consola
btnNext?.addEventListener('click', () => getShowAndPrintARandomJoke(reportAcudits));

// ELEMENT: representaciones de los botones '1', '2', '3'
const btnScore1: Element | null = document.querySelector('#btn_score_1');
const btnScore2: Element | null = document.querySelector('#btn_score_2');
const btnScore3: Element | null = document.querySelector('#btn_score_3');

// EVENTLISTENER botones '1', '2', '3'
btnScore1?.addEventListener('click', () => setScoreCurrentJoke(1));
btnScore2?.addEventListener('click', () => setScoreCurrentJoke(2));
btnScore3?.addEventListener('click', () => setScoreCurrentJoke(3));

// FUNCION: modifica el último elemento de 'reportAcudits'
function setScoreCurrentJoke(score: number) {
    reportAcudits[reportAcudits.length-1].setScore(score);
    console.log(reportAcudits);
}