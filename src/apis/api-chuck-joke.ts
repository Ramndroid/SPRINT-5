import { ChuckJoke } from "../models/chuckjoke.js";
import { Joke } from "../models/joke.js";
import { pushJoke as funcionesPushJoke } from "../funciones.js";

// URL de la API 'https://api.chucknorris.io' para obtener un chiste
const API_CHUCK_JOKE_URL: string = 'https://api.chucknorris.io/jokes/random';

// FUNCIÓN EXPORT para hacer la consulta
export const showChuckJoke = () => getChuckJokeAndUpdate();

// ASYNC FUNCTION: lanza una petición a la api chuck-joke y muestra los resultados
async function getChuckJokeAndUpdate(): Promise<void> {
    try {
        const chuckJoke: ChuckJoke = <ChuckJoke> await doFetchChuckJoke(); 
        funcionesPushJoke(new Joke(chuckJoke.joke, Joke.CHUCK));
        (<any>chuckJoke).updateUiJoke();
    } catch (err: any) {
        console.log(err.message);
    }    
}

// FETCH: api 'https://api.chucknorris.io'
function doFetchChuckJoke(): Promise<ChuckJoke> {
    return fetch(API_CHUCK_JOKE_URL)
        .then((response) => response.json())
        .then((mjoke) => new ChuckJoke(mjoke.id, mjoke.value, mjoke.url, mjoke.icon_url));
}