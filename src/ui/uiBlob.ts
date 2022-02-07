import { getRandomInRange } from "../utils/tools.js";
import { getRandomNumFromIntervalWithExclusion } from "../utils/tools.js";

// Variables que corresponden al número máximo de imagenes que haya para cada 'blob'
const maxRandomBgBlob: number = 15;
const maxRandomBgMiniBlob: number = 20;

// Número de .svg que se va a usar para represntar un fondo en 'blob'
let blobBg: number = getRandomInRange(1, maxRandomBgBlob);
let blobBg1: number = getRandomInRange(1, maxRandomBgMiniBlob);
let blobBg2: number = getRandomInRange(1, maxRandomBgMiniBlob);

// Muestra blobs aleatorios al iniciar la web
showAnotherBlobs();

export function showAnotherBlobs(): void {
    // Blob centro
    changeClassToElement('blob-bg', maxRandomBgBlob, blobBg, 'blob-bg', ['blob', 'blob-bg']);

    // Blob pequeño izquierda
    changeClassToElement('blob-bg-1', maxRandomBgMiniBlob, blobBg1, 'blob-mini-bg', ['blob-mini', 'blob-mini-1']);

    // Blob pequeño derecha
    changeClassToElement('blob-bg-2', maxRandomBgMiniBlob, blobBg2, 'blob-mini-bg', ['blob-mini', 'blob-mini-2']);
}

function changeClassToElement (
    idElement: string,
    maxReferenceIncluded: number,
    currentReferenceBG: number,
    targetClass: string,
    classList: string[]): void {

    const element: HTMLElement | null = document.getElementById(idElement);
    const aleatorio: number = getRandomNumFromIntervalWithExclusion(1, maxReferenceIncluded, currentReferenceBG);
    const newClass: string = `${targetClass}-${aleatorio}`;
    element?.classList.forEach((clase, _) => element?.classList.remove(clase));
    classList.forEach(it => element?.classList.add(it));
    element?.classList.add(newClass);
}