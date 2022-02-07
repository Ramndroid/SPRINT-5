import { DadJoke } from "../models/dadjoke.js";
import { Joke } from "../models/joke.js";
import { pushJoke as funcionesPushJoke  } from "../funciones.js";

// URL de la API 'https://icanhazdadjoke.com' para obtener un chiste
const API_DAD_JOKE_URL: string = 'https://icanhazdadjoke.com';

// {HEADERS}: cabecero usado en la API 'https://icanhazdadjoke.com'
const API_DAD_JOKE_HEADER: {} = { headers: {'Accept': 'application/json'}};

// FUNCIÓN EXPORT para hacer la consulta
export const showDadJoke = () => getDadJokeAndUpdate();

// ASYNC FUNCTION: lanza una petición a la api dad-joke y muestra los resultados
async function getDadJokeAndUpdate(): Promise<void> {
    try {
        const dadJoke: DadJoke = <DadJoke> await doFetchDadJoke(); 
        funcionesPushJoke(new Joke(dadJoke.joke, Joke.DAD));
        (<any>dadJoke).updateUiJoke();
    } catch (err: any) {
        console.log(err.message);
    }
}

// FETCH: api 'https://icanhazdadjoke.com'
function doFetchDadJoke(): Promise<DadJoke> {
    return fetch(API_DAD_JOKE_URL, API_DAD_JOKE_HEADER)
        .then((response) => response.json())
        .then((mjoke) => new DadJoke(mjoke.id, mjoke.joke, mjoke.status));
}