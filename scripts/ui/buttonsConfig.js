export function initButtons(score, joke) {
    // Botones '1' '2' '3' para la puntuación de las bromas
    for (let i = 1; i <= 3; i++) {
        const btnScore = document.querySelector(`#btn_score_${i}`);
        btnScore === null || btnScore === void 0 ? void 0 : btnScore.addEventListener('click', () => score(i));
    }
    // Botón para lanzar una petición de una broma
    const btnNext = document.querySelector('#btn_next');
    btnNext === null || btnNext === void 0 ? void 0 : btnNext.addEventListener('click', () => joke());
}
