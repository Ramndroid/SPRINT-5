import { Joke } from "../models/joke.js";
import { Analisis } from "./analisis.js";
import { getRandomBoolean } from "../utils/tools.js";

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
            return getRandomBoolean();
        else {
            const analisis = Analisis.preAnalisisJokesRecogidos(ReportAcudits.reportAcudits);
            console.log("Análisis de datos: ", analisis);
            return analisis.tomarDecisionSobreDad();
        }
    }
}