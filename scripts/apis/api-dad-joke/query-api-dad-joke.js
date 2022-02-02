var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DadJoke } from "../../models/dadjoke/dadjoke.js";
import { Joke } from "../../models/joke/joke.js";
import { API_DAD_JOKE_URL } from "./const-api-dad-joke.js";
import { API_DAD_JOKE_HEADER } from "./const-api-dad-joke.js";
// FETCH: api 'https://icanhazdadjoke.com'
function getADadJoke() {
    return fetch(API_DAD_JOKE_URL, API_DAD_JOKE_HEADER)
        .then((response) => response.json())
        .then((mjoke) => new DadJoke(mjoke.id, mjoke.joke, mjoke.status));
}
// EXPORT ASYNC FUNCTION: lanza una petición a la api dad-joke
export function showDadJoke(jokeList) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dadJoke = yield getADadJoke();
            dadJoke.showJoke();
            jokeList.push(new Joke(dadJoke.joke, "dad-joke"));
            console.log(jokeList);
        }
        catch (err) {
            console.log(err.message);
        }
    });
}
