/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {

    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {

        const phraseUl = document.querySelector("#phrase ul");
        const phraseArray = this.phrase.split("");
        let phraseUlHTML = "";

        for (let i = 0; i < phraseArray.length; i++) {
            
            if (phraseArray[i] === " ") {
                phraseUlHTML += `<li class="space"> </li>`;
            } else {
                phraseUlHTML += `<li class="hide letter ${phraseArray[i]}">${phraseArray[i]}</li>`;
            }
        }

        phraseUl.innerHTML = phraseUlHTML;
        
    }

    showMatchedLetters(targetLetter) {
        const letters = document.querySelectorAll(".letter");
        for (let i = 0; i < letters.length; i++) {
            const className = letters[i].className;
            if (className === `hide letter ${targetLetter}`) {
                letters[i].classList.remove("hide");
                letters[i].classList.add("show");
            }
        }
    }
}