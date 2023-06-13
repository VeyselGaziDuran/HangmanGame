const word_el = document.getElementById('word')

function getRandomWord(){
    const words = ["Python", "JavaScript", "PHP", "Java", "Ruby", "Swift", "C#", "Go", "Kotlin", "TypeScript", "Dart", "Rust", "Lua", "Perl", "Scala", "R", "MATLAB", "Erlang"];
    return words[Math.floor(Math.random() * words.length)];
}

console.log(getRandomWord());

function displayWord(){
    const selectedWord = getRandomWord();

    word_el.innerHTML = `
        ${selectedWord.split('').map(letter => `
            <div class="letter">
                ${letter}
            </div>
        `).join('')}
    `;
}

displayWord();