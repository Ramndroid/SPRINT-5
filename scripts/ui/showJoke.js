// DECORDADOR: muestra una broma por consola. Se usa sobre la clase 'DadJoke'
export function showJoke(constructor) {
    constructor.prototype.showJoke = function () {
        console.log(this.joke);
    };
}
