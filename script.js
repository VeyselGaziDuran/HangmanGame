const word_el = document.getElementById('word');
const popup = document.getElementById('popup-container')

const correctLetters =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const wrongLetters = [];

function getRandomWord(){
    const words = ["Python", "JavaScript", "PHP", "Java", "Ruby", "Swift", "C#", "Go", "kotlin", "typescript", "dart", "rust", "lua", "perl", "Scala", "R", "MATLAB", "Erlang"];
    return words[Math.floor(Math.random() * words.length)];
}

function displayWord(){
    const selectedWord = getRandomWord();

    word_el.innerHTML = `
        ${selectedWord.split('').map(letter => `
            <div class="letter">
                ${correctLetters.includes(letter) ? letter: ''}
            </div>
        `).join('')}
    `;

    const w = word_el.innerText.replace(/\n/g,'');
    if(w === selectedWord){
        popup.style.display = 'flex';
    }
    

}

displayWord();