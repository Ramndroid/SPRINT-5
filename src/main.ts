import { getShowAndPrintARandomJoke } from "./apis/querys.js";
import { getCurrentWeather } from "./apis/querys.js";
import { Joke } from "./models/joke.js";

// Obtención del clima de hoy
getCurrentWeather("ca"); // admite valores como 'en', 'es, 'ca',... representan idiomas

// reportAcudits: array con las bromas descargadas y sus valoraciones
const reportAcudits: Joke[] = [];

// Botones '1' '2' '3' para la puntuación de las bromas
for (let i = 1; i <= 3; i++) {
    const btnScore: Element | null = document.querySelector(`#btn_score_${i}`);
    btnScore?.addEventListener('click', () => {
        if (reportAcudits.length > 0) reportAcudits[reportAcudits.length - 1].setScore(i);
        console.log(reportAcudits);
    });
}

// Botón para lanzar una petición de una broma
const btnNext: Element | null = document.querySelector('#btn_next');
btnNext?.addEventListener('click', () => getShowAndPrintARandomJoke(reportAcudits));