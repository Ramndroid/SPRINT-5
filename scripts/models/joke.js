// CLASE JOKE: modelo para cada broma obtenida de cualquier api
export class Joke {
    constructor(joke, source, score = 0, date = "") {
        this.joke = joke;
        this.source = source;
        this.score = score;
        this.date = date;
    }
    setScore(score) {
        this.score = score;
        const now = new Date();
        this.date = now.toISOString();
    }
}
Joke.DAD = "dad";
Joke.CHUCK = "chuck";
