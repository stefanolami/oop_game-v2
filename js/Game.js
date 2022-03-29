/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }


    /** 
     * Creates a phrase Object for every phrase in the array.
     * @return  {array}  phrasesObjects - array of Phrase Objects
     */
    createPhrases() {
        const phrasesObjects = [];
        const phrases = ['leave the atom alone',
                        'the science of today is the technology of tomorrow',
                        'something incredible is waiting to be known',
                        'there is no law except the law that there is no law',
                        'science never solves a problem without creating ten more'];
        
        for (let i = 0; i < phrases.length; i++) {
            const phraseObj = new Phrase(phrases[i]);
            phrasesObjects.push(phraseObj);
        }
        return phrasesObjects;
    }


    /** 
     * Returns a random phrase from the phrases array.
     * @return  {object}  phrase object in the phrases array.
     */
    getRandomPhrase() {
        const i = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[i];
    }


    /** 
     * Hides the overlay, selects a random phrase and adds it to the HTML.
     */
    startGame() {
        document.querySelector("#overlay").style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }


    /** 
     * Increases the missed count, takes the last Live Heart element and changes the picture to a lost one.
     */
    removeLife() {
        const hearts = document.querySelectorAll("img[src='images/liveHeart.png']");
        const lastHeart = hearts[hearts.length - 1];
        lastHeart.src = "images/lostHeart.png";
        this.missed++;
        if (this.missed >= 5) {
            this.gameOver();
        }
    }


    /** 
     * Disables the pushed button, changes its class, and calls a function depending if it's a match or not.
     * @param   {Object}  e - event object.
     */
    handleInteraction(e) {
        e.target.disabled = true;
        const targetLetter = e.target.textContent;
        if (this.activePhrase.phrase.includes(targetLetter)) {
            e.target.classList.add("chosen");
            this.activePhrase.showMatchedLetters(targetLetter);
            if (this.checkForWin()) {
                this.gameOver();
            }
        } else {
            e.target.classList.add("wrong");
            this.removeLife();
        }
    }


    /** 
     * Like before but handles keyboard inputs.
     * @param   {Object}  e - event object.
     */
    handleKeyboardInteraction(e) {
        const key = e.key.toLowerCase();
        const buttons = document.querySelectorAll("#qwerty button");
        for (let i = 0; i < buttons.length; i++) {
            if (key === buttons[i].textContent) {
                if (!buttons[i].disabled) {
                    buttons[i].disabled = true;
                    const targetLetter = buttons[i].textContent;
                    if (this.activePhrase.phrase.includes(targetLetter)) {
                        buttons[i].classList.add("chosen");
                        this.activePhrase.showMatchedLetters(targetLetter);
                        if (this.checkForWin()) {
                            this.gameOver();
                        }
                    } else {
                        buttons[i].classList.add("wrong");
                        this.removeLife();
                    }
                }
            }
        }
    }


    /** 
     * Checks if there are still letters with the class "hide", or if all letters are shown.
     */
    checkForWin() {
        const hiddenLetters = document.querySelectorAll(".hide");
        if (hiddenLetters.length > 0) {
            return false;
        } else {
            return true;
        }
    }


    /** 
     * Shows the overlay with colors and a message depending if the player won or lost.
     */
    gameOver() {
        const overlay = document.querySelector("#overlay");
        const overlayMessage = document.querySelector("#game-over-message");
        overlay.style.display = "flex";
        if (this.missed >= 5) {
            overlayMessage.textContent = "You've Lost!"
            overlay.classList.remove("start");
            overlay.classList.remove("win");
            overlay.classList.add("lose");
        } else {
            overlayMessage.textContent = "You've Won!"
            overlay.classList.remove("start");
            overlay.classList.remove("lose");
            overlay.classList.add("win");
        }
    }


    /** 
     * Resets all the phrase HTML. Enables all buttons and resets they're class to "key". Resets all the lives.
     */
    resetGame() {
        document.querySelector("#phrase ul").innerHTML = "";
        const buttons = document.querySelectorAll("#qwerty button");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
            buttons[i].classList.remove("chosen");
            buttons[i].classList.remove("wrong");
            buttons[i].classList.add("key");
        }
        const imgs = document.querySelectorAll("img");
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].src = "images/liveHeart.png";
        }
    }
}