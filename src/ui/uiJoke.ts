// DECORDADOR: muestra una broma por consola. Se usa sobre la clase 'DadJoke'
export function updateUiJoke(constructor: Function): void{
    constructor.prototype.updateUiJoke = function() {
        console.log(this.joke);
        setHTML(this.joke);
    }
}

function setHTML(resultToShow: string): void {
    setHTMLJokeText(resultToShow);
    setHTMLCurrentJokeVisible();
}

function setHTMLJokeText(resultToShow: string): void {
    let elementP: HTMLElement | null = document.getElementById('joke');
    if (elementP != null) 
        elementP.innerText = resultToShow;
}

function setHTMLCurrentJokeVisible(): void {
    let element: HTMLElement | null = document.querySelector('#joke-div');
    element?.classList.replace("joke-joke-off", "joke-joke-on");
}