import { showAnotherBlobs } from "./uiBlob.js";

export function configAllButtons(score: Function, joke: Function): void {
    setNextButton(score, joke);
}

// Variable usada para determinar si es la primera configuración de los botones
let firstConfig = true;

function setNextButton(score: Function, joke: Function): void {
    const btnNext: HTMLElement | null = document.querySelector('#btn_next');
    btnNext?.addEventListener('click', () => { 
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
function setNextJokeButtonText(): void {
    const btnNextText: HTMLElement | null = document.getElementById('btn_next_text');
    if (btnNextText != null) btnNextText.innerText = "Següent acudit!";
}

// Botones '1' '2' '3' para la puntuación de las bromas
function setScoreButtons(score: Function): void {
    for (let i = 1; i <= 3; i++) {
        const btnScore: Element | null = document.querySelector(`#btn_score_${i}`);
        btnScore?.addEventListener('click', () => score(i));
    }
}

// Modifica la visibilidad de los botones score
function setVisibilityScoreButtons(): void {
    const element: HTMLElement | null = document.querySelector('#joke-score');
    element?.classList.replace("joke-score-off", "joke-score-on");
}