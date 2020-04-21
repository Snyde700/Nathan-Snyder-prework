listedWins = document.querySelector('#wins');
listedWord = document.querySelectorAll('#currentWord');
listedWrong = document.querySelector('guessedWrong');
listedGuessCount = document.querySelector('#guessRemain');

const wordList = ['Brass_In_Pocket', 'Piano_Man', 'The_Joker', 'Dream_On', 'Crazy_On_You'];

let word = wordList[Math.floor(Math.random () *
    wordList.length)].toUpperCase();

let guess = [];
let winCount = 0;
let wrongLetter = [];
let guessRemaining = 13;
let prevWord;


let guessGame = {
    update: function() {
        listedWins.innertext = winCount;
        listedWord.innerHTML = guess.join(" ");
        listedWrong.innertext = wrongLetters.join(" ");
        listedGuessCount.innertext = guessRemaining;
    },
    newGame: function() {
        word = wordList[Math.floor(math.random() * wordList.length)].toUpperCase();
        guess = [];
        guessWrong = [];
        guessRemaining = 13;
}
}
