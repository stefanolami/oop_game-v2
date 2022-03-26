/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        /* this.phrases = ['leave the atom alone',
                        'the science of today is the technology of tomorrow',
                        'something incredible is waiting to be known',
                        'there is no law except the law that there is no law',
                        'science never solves a problem without creating ten more']; */
        this.activePhrase = null;
    }

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

    startGame() {
        document.querySelector("#overlay").style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        const i = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[i];
    }

    removeLife() {
        const hearts = document.querySelectorAll("img[src='images/liveHeart.png']");
        const lastHeart = hearts[hearts.length - 1];
        lastHeart.src = "images/lostHeart.png";
        this.missed++;
        if (this.missed >= 5) {
            this.gameOver();
        }
    }
}