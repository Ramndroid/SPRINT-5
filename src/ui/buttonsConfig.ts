export function initButtons(score: Function, joke: Function): void {
    // Botones '1' '2' '3' para la puntuación de las bromas
    for (let i = 1; i <= 3; i++) {
        const btnScore: Element | null = document.querySelector(`#btn_score_${i}`);
        btnScore?.addEventListener('click', () => score(i) );
    }

    // Botón para lanzar una petición de una broma
    const btnNext: Element | null = document.querySelector('#btn_next');
    btnNext?.addEventListener('click', () => joke());
}