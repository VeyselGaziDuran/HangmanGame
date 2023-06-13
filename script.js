const word_el = document.getElementById('word');
const popup = document.getElementById('popup-container')
const message_el = document.getElementById('success-message')

const correctLetters =['a', 'b', 'c'];
const wrongLetters = [];
const selectedWord = getRandomWord();

function getRandomWord(){
    const words = ["python", "javascript", "php", "java", "ruby", "swift", "go", "kotlin", "typescript", "dart", "rust", "lua", "perl", "scala"];
    return words[Math.floor(Math.random() * words.length)];
}

function displayWord(){
    

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
        message_el.innerText = 'Congratulations You Won'
    }
    

}


window.addEventListener('keydown', function(e){
    let key = e.key.toLowerCase();
    if (/^[a-zA-ZğüşıöçĞÜŞİÖÇ]$/.test(key)) {
        const letter = e.key;

        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);
                displayWord()
            }else{
               console.log("you have already added this letter.")
            }
        }else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);
                // hatalı harfleri güncelle
            }
        }
    }
});






displayWord();