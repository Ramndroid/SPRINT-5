import { Joke } from "../models/joke.js";
import { getRandomInRange } from "../utils/tools.js";

// REPORTACUDITS para almacenar y gestionar los chistes mostrados
export class ReportAcudits {
    private static reportAcudits: Joke[] = [];

    public static Push(joke: Joke) { ReportAcudits.reportAcudits.push(joke); }

    public static set SetScore(score: number) {
        if (ReportAcudits.reportAcudits.length > 0)
            ReportAcudits.reportAcudits[ReportAcudits.reportAcudits.length - 1].setScore(score);

        console.log(ReportAcudits.reportAcudits);
    }

    public static getNext(): boolean {
        const FIXED_NUM_TO_POND = 5;

        if (ReportAcudits.reportAcudits.length <= FIXED_NUM_TO_POND)
            return ReportAcudits.getRandom();
        else {
            let analisis = ReportAcudits.analizarJokesRecogidos();
            console.log("Análisis de datos: ", analisis);
            return ReportAcudits.tomarDecisionSobreDad(analisis);
        }
    }

    private static analizarJokesRecogidos(): Analisis {
        let totalJokes = ReportAcudits.reportAcudits.length;
        let totalDadJoke = ReportAcudits.reportAcudits.filter(elem => elem.source === Joke.DAD).length;
        let totalChuckJoke = ReportAcudits.reportAcudits.filter(elem => elem.source === Joke.CHUCK).length;
        let totalScoreDadJoke = ReportAcudits.reportAcudits
            .filter(elem => elem.source === Joke.DAD)
            .map(item => item.score)
            .reduce((prev, curr) => prev + curr, 0);
        let totalScoreChuckJoke = ReportAcudits.reportAcudits
            .filter(elem => elem.source === Joke.CHUCK)
            .map(item => item.score)
            .reduce((prev, curr) => prev + curr, 0);

        return new Analisis(totalJokes, totalDadJoke, totalChuckJoke, totalScoreDadJoke, totalScoreChuckJoke);
    }

    private static tomarDecisionSobreDad(mobject: Analisis): boolean {

        const proporcion = (total: number, units: number) => (100 * units) / total;

        let totalDad = proporcion(mobject.totalJokes, mobject.totalDad);
        let scoreDad = proporcion((mobject.scoreDad + mobject.scoreChuck), mobject.scoreDad);
        let totalChuck = proporcion(mobject.totalJokes, mobject.totalChuck);
        let scoreChuck = proporcion((mobject.scoreDad + mobject.scoreChuck), mobject.scoreChuck);

        if (totalDad == totalChuck) {
            if (scoreDad == scoreChuck) {
                return ReportAcudits.getRandom();
            } else if (scoreDad > scoreChuck) {
                return ReportAcudits.getTruncatedRandom(true, false);
            } else {
                return ReportAcudits.getTruncatedRandom(false, true);
            }
        } else if (totalDad > totalChuck && scoreDad < scoreChuck) {
            return ReportAcudits.getTruncatedRandom(false, true);
        } else if (totalChuck > totalDad && scoreChuck < scoreDad) {
            return ReportAcudits.getTruncatedRandom(true, false);
        } else {
            return ReportAcudits.getRandom();
        }
    }

    private static getRandom(): boolean {
        let random = getRandomInRange(1, 10);
        if (random <= 5) {
            return true;  // 50%
        } else {
            return false; // 50%
        }
    }

    private static getTruncatedRandom(bool1: boolean, bool2: boolean): boolean {
        let random = getRandomInRange(1, 10);
        if (random <= 6) {
            return bool1; // 60%
        } else {
            return bool2; // 40%
        }
    }
}

class Analisis {
    constructor(
        public totalJokes: number,
        public totalDad: number,
        public totalChuck: number,
        public scoreDad: number,
        public scoreChuck: number,
    ) { }
}