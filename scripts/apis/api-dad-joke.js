var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DadJoke } from "../models/dadjoke.js";
import { Joke } from "../models/joke.js";
import { pushJoke } from "../funciones.js";
// URL de la API 'https://icanhazdadjoke.com' para obtener un chiste
const API_DAD_JOKE_URL = 'https://icanhazdadjoke.com';
// {HEADERS}: cabecero usado en la API 'https://icanhazdadjoke.com'
const API_DAD_JOKE_HEADER = { headers: { 'Accept': 'application/json' } };
// FUNCIÓN EXPORT para hacer la consulta
export function showDadJoke() {
    getDadJokeAndUpdate();
}
// ASYNC FUNCTION: lanza una petición a la api dad-joke y muestra los resultados
function getDadJokeAndUpdate() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dadJoke = yield doFetchDadJoke();
            dadJoke.updateUiJoke();
            pushJoke(new Joke(dadJoke.joke, Joke.DAD));
        }
        catch (err) {
            console.log(err.message);
        }
    });
}
// FETCH: api 'https://icanhazdadjoke.com'
function doFetchDadJoke() {
    return fetch(API_DAD_JOKE_URL, API_DAD_JOKE_HEADER)
        .then((response) => response.json())
        .then((mjoke) => new DadJoke(mjoke.id, mjoke.joke, mjoke.status));
}
