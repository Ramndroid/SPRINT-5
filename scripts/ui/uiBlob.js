import { getRandomInRange } from "../utils/tools.js";
// Variables que corresponden al número máximo de imagenes que haya para cada 'blob'
const maxRandomBgBlob = 15;
const maxRandomBgMiniBlob = 20;
// Número de .svg que se va a usar para represntar un fondo en 'blob'
let blobBg = getRandomInRange(1, maxRandomBgBlob);
let blobBg1 = getRandomInRange(1, maxRandomBgMiniBlob);
let blobBg2 = getRandomInRange(1, maxRandomBgMiniBlob);
// Muestra blobs aleatorios al iniciar la web
showAnotherBlobs();
export function showAnotherBlobs() {
    // Blob centro
    changeClassToElement('blob-bg', maxRandomBgBlob, blobBg, 'blob-bg', ['blob', 'blob-bg']);
    // Blob pequeño izquierda
    changeClassToElement('blob-bg-1', maxRandomBgMiniBlob, blobBg1, 'blob-mini-bg', ['blob-mini', 'blob-mini-1']);
    // Blob pequeño derecha
    changeClassToElement('blob-bg-2', maxRandomBgMiniBlob, blobBg2, 'blob-mini-bg', ['blob-mini', 'blob-mini-2']);
}
function changeClassToElement(idElement, maxReferenceIncluded, currentReferenceBG, targetClass, classList) {
    let element = document.getElementById(idElement);
    let aleatorio = getRandomNumFromIntervalWithExclusion(1, maxReferenceIncluded, currentReferenceBG);
    let newClass = `${targetClass}-${aleatorio}`;
    element === null || element === void 0 ? void 0 : element.classList.forEach((clase, _) => element === null || element === void 0 ? void 0 : element.classList.remove(clase));
    classList.forEach(it => element === null || element === void 0 ? void 0 : element.classList.add(it));
    element === null || element === void 0 ? void 0 : element.classList.add(newClass);
}
function getRandomNumFromIntervalWithExclusion(min, max, excluded) {
    let nextRandom = getRandomInRange(min, max);
    if (nextRandom != excluded)
        return nextRandom;
    else
        return getRandomNumFromIntervalWithExclusion(min, max, nextRandom);
}
