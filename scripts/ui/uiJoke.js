// DECORDADOR: muestra una broma por consola. Se usa sobre la clase 'DadJoke'
export function updateUiJoke(constructor) {
    constructor.prototype.updateUiJoke = function () {
        let resultToShow = this.joke;
        console.log(resultToShow);
        let elementP = document.getElementById('joke');
        if (elementP != null)
            elementP.innerText = resultToShow;
        // let elementButton: Element | null = document.querySelector('#btn_next');
        // if (elementButton != null) elementButton.textContent = "Següent acudit";
    };
}
