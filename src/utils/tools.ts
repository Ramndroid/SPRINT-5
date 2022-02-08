export const getRandomInRange = (min: number, max: number) => { 
    return Math.floor(Math.random() * (max - min + 1) + min) 
};

export function getRandomNumFromIntervalWithExclusion (min: number, max: number, excluded: number): number {
    const nextRandom = getRandomInRange(min, max);

    if (nextRandom != excluded)
        return nextRandom;
    else 
        return getRandomNumFromIntervalWithExclusion(min, max, nextRandom);
}

export function getRandomBoolean(): boolean {
    const random = getRandomInRange(1, 10);
    return random <= 5;
}

export function getTruncatedRandomBoolean(range: [number, number], trick: number): boolean {
    const random = Math.random() * (range[1] - range[0] + 1) + range[0];
    return random <= trick;
}