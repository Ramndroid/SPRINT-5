import { IJoke } from "./ijoke.js";

// CLASE JOKE: modelo para cada broma obtenida de cualquier api
export class Joke implements IJoke {
    constructor (
        public joke: string,
        public source: string,
        public score: number = 0,
        public date:string  = ""
    ) {}

    setScore(score: number){
        this.score = score;
        let now = new Date();
        this.date = now.toISOString();
    }
}