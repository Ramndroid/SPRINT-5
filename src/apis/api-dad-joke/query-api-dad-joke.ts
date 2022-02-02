import { DadJoke } from "../../models/dadjoke/dadjoke.js";
import { API_DAD_JOKE_URL } from "./const-api-dad-joke.js";
import { API_DAD_JOKE_HEADER } from "./const-api-dad-joke.js";

// FETCH: api 'https://icanhazdadjoke.com'
export function getADadJoke(): Promise<Object> {
    return fetch(API_DAD_JOKE_URL, API_DAD_JOKE_HEADER)
        .then((response) => response.json())
        .then((mjoke) => new DadJoke(mjoke.id, mjoke.joke, mjoke.status))
}