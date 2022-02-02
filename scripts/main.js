import { getShowAndPrintARandomJoke } from "./apis/querys.js";
// ELEMENT: representa el botón "següent"
const btnNext = document.querySelector('#btn_next');
// EVENTLISTENER: botón 'btnNext', click: obtiene y muestra una broma por consola
btnNext === null || btnNext === void 0 ? void 0 : btnNext.addEventListener('click', () => getShowAndPrintARandomJoke());
