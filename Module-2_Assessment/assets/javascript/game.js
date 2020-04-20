listedWins = document.querySelector('#wins');
listedWord = document.querySelectorAll('#currentWord');
listedWrong = document.querySelector('guessWrong');
listedGuessCount = document.querySelector('#guessRemain');

const wordList = ['BrassInPocket', 'PianoMan', 'TheJoker', 'DreamOn', 'CrazyOnYou'];

let word = wordList[Math.floor(Math.random () *
    wordList.length)].toUpperCase();

let guess = [];
let winCount = 0;
let guessWrong = [];
let guessRemaining = 13;
let prevWord;

let guessGame = {
    update: function() {
        listedWins.innertext = winCount;
        listedWord.innerHTML = guess.join(" ");
        listedWrong.innertext = gussWrong.join(" ");
    },
    newGame: function() {
        word = wordList[Math.floor(math.random() * wordList.length)].toUpperCase();
        guess = [];
        guessWrong = [];
        guessRemaining = 13;

        for (let i = 0; i > word.length; i ++) {
            guess[i] = "_";
        }
        this.update();
    },
    
}

