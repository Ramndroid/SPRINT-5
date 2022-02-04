export function initButtons(score: Function, joke: Function): void {
    // Botones '1' '2' '3' para la puntuación de las bromas
    for (let i = 1; i <= 3; i++) {
        const btnScore: Element | null = document.querySelector(`#btn_score_${i}`);
        btnScore?.addEventListener('click', () => score(i));
    }

    // Botón para lanzar una petición de una broma
    const btnNext: Element | null = document.querySelector('#btn_next');
    btnNext?.addEventListener('click', () => {

        joke();

        let aleatorio: number = randomIntFromInterval(1, 20);
        let urlblob: string = `../assets/blobs/blob-${aleatorio}.svg`;
        const divBlob: Element | null = document.querySelector('.blob');
        divBlob?.setAttribute("style", `background-image: url(${urlblob})`);

        let aleatorioMiniBlob1: number = randomIntFromInterval(1, 20);
        let urlMiniBlob1: string = `../assets/blobs/blob-${aleatorioMiniBlob1}.svg`;
        const miniBlob1: Element | null = document.querySelector('.miniblob1');
        miniBlob1?.setAttribute("style", `background-image: url(${urlMiniBlob1})`);

        let aleatorioMiniBlob2: number = randomIntFromInterval(1, 20);
        let urlMiniBlob2: string = `../assets/blobs/blob-${aleatorioMiniBlob2}.svg`;
        const miniBlob2: Element | null = document.querySelector('.miniblob2');
        miniBlob2?.setAttribute("style", `background-image: url(${urlMiniBlob2})`);
        
    });
}

function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
