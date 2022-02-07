import { Joke } from "../models/joke.js";
import { getRandomBoolean, getTruncatedRandomBoolean } from "../utils/tools.js";

export class Analisis {

    constructor(
        public totalJokes: number,
        public totalDad: number,
        public totalChuck: number,
        public scoreDad: number,
        public scoreChuck: number,
    ) { }

    public static preAnalisisJokesRecogidos(reportAcudits: Joke[]): Analisis {

        const showedJokes = [...reportAcudits];
        const showedJokesDad = showedJokes.filter(elem => elem.source === Joke.DAD);
        const showedJokesChuck = showedJokes.filter(elem => elem.source === Joke.CHUCK);

        const getTotal = showedJokes.length;
        const getTotalDad = showedJokesDad.length;
        const getTotalChuck = showedJokesChuck.length;

        const getScoreDad = showedJokesDad
            .map(item => item.score)
            .reduce((prev, curr) => prev + curr, 0);

        const getScoreChuck = showedJokesChuck
            .map(item => item.score)
            .reduce((prev, curr) => prev + curr, 0);

        return new Analisis(getTotal, getTotalDad, getTotalChuck, getScoreDad, getScoreChuck);
    }

    tomarDecisionSobreDad(): boolean {

        const proporcion = (total: number, units: number) => (100 * units) / total;

        const percTotalDad = proporcion(this.totalJokes, this.totalDad);
        const percScoreDad = proporcion((this.scoreDad + this.scoreChuck), this.scoreDad);
        const percTotalChuck = proporcion(this.totalJokes, this.totalChuck);
        const percScoreChuck = proporcion((this.scoreDad + this.scoreChuck), this.scoreChuck);

        const tuplaRange: [number, number] = [1, 10];

        if (percTotalDad == percTotalChuck) { // percTotalDad == percTotalChuck

            if (percScoreDad == percScoreChuck)
                return getRandomBoolean();

            else if (percScoreDad > percScoreChuck)
                return getTruncatedRandomBoolean(tuplaRange, 5.5);

            else if (percScoreDad < percScoreChuck)
                return getTruncatedRandomBoolean(tuplaRange, 4.5);

            else
                return getRandomBoolean();


        } else if (percTotalDad > percTotalChuck) { // percTotalDad > percTotalChuck

            if (percScoreDad == percScoreChuck)
                return getTruncatedRandomBoolean(tuplaRange, 4);

            else if (percScoreDad > percScoreChuck)
                return getTruncatedRandomBoolean(tuplaRange, 5.5);

            else if (percScoreDad < percScoreChuck)
                return getTruncatedRandomBoolean(tuplaRange, 3);
            
            else
                return getRandomBoolean();

        } else if (percTotalDad < percTotalChuck) { // percTotalDad < percTotalChuck

            if (percScoreDad == percScoreChuck)
            return getTruncatedRandomBoolean(tuplaRange, 6);

            else if (percScoreDad > percScoreChuck)
                return getTruncatedRandomBoolean(tuplaRange, 7);

            else if (percScoreDad < percScoreChuck)
                return getTruncatedRandomBoolean(tuplaRange, 5.5);
            
            else
                return getRandomBoolean();

        } else {                                // Else
            return getRandomBoolean();
        }
    }
}