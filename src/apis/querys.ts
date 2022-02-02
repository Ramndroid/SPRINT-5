import { getADadJoke } from "./api-dad-joke/query-api-dad-joke.js";

// FUNCION: usada en 'main.ts' por el elemento (botón) 'btnNext'
export function getShowAndPrintARandomJoke() {
    showDadJoke();
}

// EXPORT ASYNC FUNCTION: lanza una petición a la api dad-joke
async function showDadJoke(): Promise<void> {
    try {
      (<any> await getADadJoke()).showJoke(); 
    } catch (err: any) {
        console.log(err.message);
    }
}