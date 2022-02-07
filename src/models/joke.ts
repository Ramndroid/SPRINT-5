import { IJoke } from "./interfaces/ijoke.js";

// CLASE JOKE: modelo para cada broma obtenida de cualquier api
export class Joke implements IJoke {

    public static DAD: string = "dad";
    public static CHUCK: string = "chuck";

    constructor (
        public joke: string,
        public source: string,
        public score: number = 0,
        public date: string  = ""
    ) {}

    setScore(score: number){
        this.score = score;
        const now = new Date();
        this.date = now.toISOString();
    }
}