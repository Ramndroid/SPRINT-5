import { Joke } from "../models/joke.js";
import { getRandomInRange } from "../utils/tools.js";
// REPORTACUDITS para almacenar y gestionar los chistes mostrados
export class ReportAcudits {
    static Push(joke) { ReportAcudits.reportAcudits.push(joke); }
    static set SetScore(score) {
        if (ReportAcudits.reportAcudits.length > 0)
            ReportAcudits.reportAcudits[ReportAcudits.reportAcudits.length - 1].setScore(score);
        console.log(ReportAcudits.reportAcudits);
    }
    static getNext() {
        const FIXED_NUM_TO_POND = 5;
        if (ReportAcudits.reportAcudits.length <= FIXED_NUM_TO_POND)
            return ReportAcudits.getRandom();
        else {
            let analisis = ReportAcudits.analizarJokesRecogidos();
            console.log("Análisis de datos: ", analisis);
            return ReportAcudits.tomarDecisionSobreDad(analisis);
        }
    }
    static analizarJokesRecogidos() {
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
    static tomarDecisionSobreDad(mobject) {
        const proporcion = (total, units) => (100 * units) / total;
        let totalDad = proporcion(mobject.totalJokes, mobject.totalDad);
        let scoreDad = proporcion((mobject.scoreDad + mobject.scoreChuck), mobject.scoreDad);
        let totalChuck = proporcion(mobject.totalJokes, mobject.totalChuck);
        let scoreChuck = proporcion((mobject.scoreDad + mobject.scoreChuck), mobject.scoreChuck);
        if (totalDad == totalChuck) {
            if (scoreDad == scoreChuck) {
                return ReportAcudits.getRandom();
            }
            else if (scoreDad > scoreChuck) {
                return ReportAcudits.getTruncatedRandom(true, false);
            }
            else {
                return ReportAcudits.getTruncatedRandom(false, true);
            }
        }
        else if (totalDad > totalChuck && scoreDad < scoreChuck) {
            return ReportAcudits.getTruncatedRandom(false, true);
        }
        else if (totalChuck > totalDad && scoreChuck < scoreDad) {
            return ReportAcudits.getTruncatedRandom(true, false);
        }
        else {
            return ReportAcudits.getRandom();
        }
    }
    static getRandom() {
        let random = getRandomInRange(1, 10);
        if (random <= 5) {
            return true; // 50%
        }
        else {
            return false; // 50%
        }
    }
    static getTruncatedRandom(bool1, bool2) {
        let random = getRandomInRange(1, 10);
        if (random <= 6) {
            return bool1; // 60%
        }
        else {
            return bool2; // 40%
        }
    }
}
ReportAcudits.reportAcudits = [];
class Analisis {
    constructor(totalJokes, totalDad, totalChuck, scoreDad, scoreChuck) {
        this.totalJokes = totalJokes;
        this.totalDad = totalDad;
        this.totalChuck = totalChuck;
        this.scoreDad = scoreDad;
        this.scoreChuck = scoreChuck;
    }
}
