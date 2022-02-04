export function initButtons(score, joke) {
    // Botones '1' '2' '3' para la puntuación de las bromas
    for (let i = 1; i <= 3; i++) {
        const btnScore = document.querySelector(`#btn_score_${i}`);
        btnScore === null || btnScore === void 0 ? void 0 : btnScore.addEventListener('click', () => score(i));
    }
    // Botón para lanzar una petición de una broma
    const btnNext = document.querySelector('#btn_next');
    btnNext === null || btnNext === void 0 ? void 0 : btnNext.addEventListener('click', () => {
        joke();
        let aleatorio = randomIntFromInterval(1, 20);
        let urlblob = `../assets/blobs/blob-${aleatorio}.svg`;
        const divBlob = document.querySelector('.blob');
        divBlob === null || divBlob === void 0 ? void 0 : divBlob.setAttribute("style", `background-image: url(${urlblob})`);
        let aleatorioMiniBlob1 = randomIntFromInterval(1, 20);
        let urlMiniBlob1 = `../assets/blobs/blob-${aleatorioMiniBlob1}.svg`;
        const miniBlob1 = document.querySelector('.miniblob1');
        miniBlob1 === null || miniBlob1 === void 0 ? void 0 : miniBlob1.setAttribute("style", `background-image: url(${urlMiniBlob1})`);
        let aleatorioMiniBlob2 = randomIntFromInterval(1, 20);
        let urlMiniBlob2 = `../assets/blobs/blob-${aleatorioMiniBlob2}.svg`;
        const miniBlob2 = document.querySelector('.miniblob2');
        miniBlob2 === null || miniBlob2 === void 0 ? void 0 : miniBlob2.setAttribute("style", `background-image: url(${urlMiniBlob2})`);
    });
}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
