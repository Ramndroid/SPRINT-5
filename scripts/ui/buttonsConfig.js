import { showAnotherBlobs } from "./uiBlob.js";
export function configAllButtons(score, joke) {
    setNextButton(score, joke);
}
// Variable usada para determinar si es la primera configuración de los botones
let firstConfig = true;
function setNextButton(score, joke) {
    const btnNext = document.querySelector('#btn_next');
    btnNext === null || btnNext === void 0 ? void 0 : btnNext.addEventListener('click', () => {
        joke();
        showAnotherBlobs();
        if (firstConfig) {
            firstConfig = false;
            setNextJokeButtonText();
            setScoreButtons(score);
            setVisibilityScoreButtons();
        }
    });
}
// Set text button next joke
function setNextJokeButtonText() {
    const btnNextText = document.getElementById('btn_next_text');
    if (btnNextText != null)
        btnNextText.innerText = "Següent acudit!";
}
// Botones '1' '2' '3' para la puntuación de las bromas
function setScoreButtons(score) {
    for (let i = 1; i <= 3; i++) {
        const btnScore = document.querySelector(`#btn_score_${i}`);
        btnScore === null || btnScore === void 0 ? void 0 : btnScore.addEventListener('click', () => score(i));
    }
}
// Modifica la visibilidad de los botones score
function setVisibilityScoreButtons() {
    const element = document.querySelector('#joke-score');
    element === null || element === void 0 ? void 0 : element.classList.replace("joke-score-off", "joke-score-on");
}
