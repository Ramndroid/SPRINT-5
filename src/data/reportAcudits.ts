import { Joke } from "../models/joke.js";

// REPORTACUDITS para almacenar y gestionar los chistes mostrados
export class ReportAcudits {
    private static reportAcudits: Joke[] = [];

    public static Push(joke: Joke) { ReportAcudits.reportAcudits.push(joke); }

    public static set SetScore(score: number) {
        if (ReportAcudits.reportAcudits.length > 0)
        ReportAcudits.reportAcudits[ReportAcudits.reportAcudits.length - 1].setScore(score);
        console.log(ReportAcudits.reportAcudits);
    }

    public static getNext(): boolean { return Math.random() < 0.5; }
}