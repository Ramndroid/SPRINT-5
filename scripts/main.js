import { getShowAndPrintARandomJoke } from "./apis/querys.js";
// REPORTACUDITS: array de jokes con las valoraciones
const reportAcudits = [];
// API DAD-JOKE: recoge un chiste al cargar la web
getShowAndPrintARandomJoke(reportAcudits);
// ELEMENT: representa el botón "següent"
const btnNext = document.querySelector('#btn_next');
// EVENTLISTENER: botón 'btnNext', click: obtiene y muestra una broma por consola
btnNext === null || btnNext === void 0 ? void 0 : btnNext.addEventListener('click', () => getShowAndPrintARandomJoke(reportAcudits));
// ELEMENT: representaciones de los botones '1', '2', '3'
const btnScore1 = document.querySelector('#btn_score_1');
const btnScore2 = document.querySelector('#btn_score_2');
const btnScore3 = document.querySelector('#btn_score_3');
// EVENTLISTENER botones '1', '2', '3'
btnScore1 === null || btnScore1 === void 0 ? void 0 : btnScore1.addEventListener('click', () => setScoreCurrentJoke(1));
btnScore2 === null || btnScore2 === void 0 ? void 0 : btnScore2.addEventListener('click', () => setScoreCurrentJoke(2));
btnScore3 === null || btnScore3 === void 0 ? void 0 : btnScore3.addEventListener('click', () => setScoreCurrentJoke(3));
// FUNCION: modifica el último elemento de 'reportAcudits'
function setScoreCurrentJoke(score) {
    reportAcudits[reportAcudits.length - 1].setScore(score);
    console.log(reportAcudits);
}
