// DECORDADOR: muestra una broma por consola. Se usa sobre la clase 'DadJoke'
export function updateUiJoke(constructor) {
    constructor.prototype.updateUiJoke = function () {
        console.log(this.joke);
        setHTML(this.joke);
    };
}
function setHTML(resultToShow) {
    setHTMLJokeText(resultToShow);
    setHTMLCurrentJokeVisible();
}
function setHTMLJokeText(resultToShow) {
    let elementP = document.getElementById('joke');
    if (elementP != null)
        elementP.innerText = resultToShow;
}
function setHTMLCurrentJokeVisible() {
    let element = document.querySelector('#joke-div');
    element === null || element === void 0 ? void 0 : element.classList.replace("joke-joke-off", "joke-joke-on");
}
