// REPORTACUDITS para almacenar y gestionar los chistes mostrados
export class ReportAcudits {
    static Push(joke) { ReportAcudits.reportAcudits.push(joke); }
    static set SetScore(score) {
        if (ReportAcudits.reportAcudits.length > 0)
            ReportAcudits.reportAcudits[ReportAcudits.reportAcudits.length - 1].setScore(score);
        console.log(ReportAcudits.reportAcudits);
    }
    static getNext() { return Math.random() < 0.5; }
}
ReportAcudits.reportAcudits = [];
