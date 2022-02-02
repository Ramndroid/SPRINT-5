import { getShowAndPrintARandomJoke } from "./apis/querys.js";

// API DAD-JOKE: recoge un chiste al cargar la web
getShowAndPrintARandomJoke();

// ELEMENT: representa el botón "següent"
const btnNext: Element | null = document.querySelector('#btn_next');

// EVENTLISTENER: botón 'btnNext', click: obtiene y muestra una broma por consola
btnNext?.addEventListener('click', () => getShowAndPrintARandomJoke());