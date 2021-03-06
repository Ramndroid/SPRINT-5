var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ChuckJoke } from "../models/chuckjoke.js";
import { Joke } from "../models/joke.js";
import { pushJoke as funcionesPushJoke } from "../funciones.js";
// URL de la API 'https://api.chucknorris.io' para obtener un chiste
const API_CHUCK_JOKE_URL = 'https://api.chucknorris.io/jokes/random';
// FUNCIÓN EXPORT para hacer la consulta
export const showChuckJoke = () => getChuckJokeAndUpdate();
// ASYNC FUNCTION: lanza una petición a la api chuck-joke y muestra los resultados
function getChuckJokeAndUpdate() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const chuckJoke = yield doFetchChuckJoke();
            funcionesPushJoke(new Joke(chuckJoke.joke, Joke.CHUCK));
            chuckJoke.updateUiJoke();
        }
        catch (err) {
            console.log(err.message);
        }
    });
}
// FETCH: api 'https://api.chucknorris.io'
function doFetchChuckJoke() {
    return fetch(API_CHUCK_JOKE_URL)
        .then((response) => response.json())
        .then((mjoke) => new ChuckJoke(mjoke.id, mjoke.value, mjoke.url, mjoke.icon_url));
}
