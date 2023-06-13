const word_el = document.getElementById('word');

const correctLetters =['j','a','v','s','g'];
const wrongLetters = [];

function getRandomWord(){
    const words = ["Python", "JavaScript", "PHP", "Java", "Ruby", "Swift", "C#", "Go", "Kotlin", "TypeScript", "Dart", "Rust", "Lua", "Perl", "Scala", "R", "MATLAB", "Erlang"];
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
        console.log('you won');
    }
    

}

displayWord();