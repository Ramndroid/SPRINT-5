import { DadJoke } from "../../models/dadjoke.js";
import { Joke } from "../../models/joke.js";

// STRING[]: url de la API 'https://icanhazdadjoke.com' para obtener un chiste
const API_DAD_JOKE_URL: string = 'https://icanhazdadjoke.com';

// {HEADERS}: cabecero usado en la API 'https://icanhazdadjoke.com'
const API_DAD_JOKE_HEADER: {} = { headers: {'Accept': 'application/json'}};

// FETCH: api 'https://icanhazdadjoke.com'
function getADadJoke(): Promise<DadJoke> {
    return fetch(API_DAD_JOKE_URL, API_DAD_JOKE_HEADER)
        .then((response) => response.json())
        .then((mjoke) => new DadJoke(mjoke.id, mjoke.joke, mjoke.status))
}

// EXPORT ASYNC FUNCTION: lanza una petición a la api dad-joke
export async function showDadJoke(jokeList: Joke[]): Promise<void> {
    try {
        const dadJoke: DadJoke = <DadJoke> await getADadJoke(); 
        (<any>dadJoke).updateUiJoke();
        jokeList.push(new Joke(dadJoke.joke, "dad-joke"));
        // console.log(jokeList);
    } catch (err: any) {
        console.log(err.message);
    }
}