import { Analisis } from "./analisis.js";
import { getRandomBoolean } from "../utils/tools.js";
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
            return getRandomBoolean();
        else {
            const analisis = Analisis.preAnalisisJokesRecogidos(ReportAcudits.reportAcudits);
            console.log("Análisis de datos: ", analisis);
            return analisis.tomarDecisionSobreDad();
        }
    }
}
ReportAcudits.reportAcudits = [];
