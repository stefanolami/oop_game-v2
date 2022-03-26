/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {

    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        const phraseDiv = document.querySelector("#phrase");
        const phraseArray = this.phrase.split("");
        let phraseDivHTML = "";
        
        /* for (let i = 0; i < phraseArray.length; i++) {
            const li = document.createElement("li");
            if (phraseArray[i] === " ") {
                li.innerHTML = `<li class="space"> </li>`;
            } else {
                li.innerHTML = `<li class="hide letter ${phraseArray[i]}">${phraseArray[i]}</li>`;
            }
            phraseDiv.appendChild(li);
        } */

        /* for (let i = 0; i < phraseArray.length; i++) {
            const li = document.createElement("li");
            if (phraseArray[i] === " ") {
                li.textContent = " ";
                li.classList.add("space");
            } else {
                li.textContent = `${phraseArray[i]}`;
                li.classList.add(`hide letter ${phraseArray[i]}`);    
            }
            phraseDiv.appendChild(li);
        } */

        for (let i = 0; i < phraseArray.length; i++) {
            
            if (phraseArray[i] === " ") {
                phraseDivHTML += `<li class="space"> </li>`;
            } else {
                phraseDivHTML += `<li class="hide letter ${phraseArray[i]}">${phraseArray[i]}</li>`;
            }
        }
        phraseDiv.innerHTML = phraseDivHTML;
    }
}