/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game1 = null;

document.querySelector("#btn__reset").addEventListener("click", () => {
    if (game1) {
        game1.resetGame();
    }
    game1 = new Game();
    game1.startGame();
})

document.querySelector("#qwerty").addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
        game1.handleInteraction(e);
    }
})