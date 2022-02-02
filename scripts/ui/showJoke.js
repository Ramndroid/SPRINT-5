// DECORDADOR: muestra una broma por consola. Se usa sobre la clase 'DadJoke'
export function showJoke(constructor) {
    constructor.prototype.showJoke = function () {
        console.log(this.joke);
        let broma = document.getElementById('joke');
        if (broma != null)
            broma.innerText = this.joke;
    };
}
