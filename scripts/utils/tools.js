export const getRandomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
export function getRandomNumFromIntervalWithExclusion(min, max, excluded) {
    const nextRandom = getRandomInRange(min, max);
    if (nextRandom != excluded)
        return nextRandom;
    else
        return getRandomNumFromIntervalWithExclusion(min, max, nextRandom);
}
export function getRandomBoolean() {
    const random = getRandomInRange(1, 10);
    return random <= 5;
}
export function getTruncatedRandomBoolean(range, trick) {
    const random = Math.random() * (range[1] - range[0] + 1) + range[0];
    return random <= trick;
}
