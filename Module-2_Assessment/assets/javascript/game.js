listedWins = document.querySelector('#wins');
listedWord = document.querySelector('#currentWord');
listedGuessCount = document.querySelector('#guessesLeft');
listedWrong = document.querySelector('#guessWrong');

const wordList = ['Renegade', 'Roxanne', 'Barracuda', 'Kashmir', 'Paranoid', 'Bicycle', 'Alone', 'Faithfully', 'Gypsy', 'Everywhere'];
let word = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
let guess = [];
let winCount = 0;
let incorrectLetters = [];
let remainGuesses = 10;
let prevWord;

let game = {
    update: function() {
        listedGuessCount.innerText = remainGuesses;
        listedWins.innerText = "Wins: " + winCount;
        listedWord.innerHTML = guess.join(" ");
        listedWrong.innerText = incorrectLetters.join(" ");
    },
    newGame: function() {
        word = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
        guess = [];
        incorrectLetters = [];
        remainGuesses = 10;
        
        for (let replace = 0; replace < word.length; replace++) {
            guess[replace] = "_";
        } 
        this.update();
    },
    change: function() {
        //   Poster (movie) element changes 
        var songName = document.querySelector('#images');
        songName.innerText = prevWord;
        var image = document.getElementById('songCover');
        var songCover = `assets/images/${prevWord}.jpg`
        image.src = songCover;
    // Grabs song from audio asset and plays
        var audio = document.getElementById('Songs');
        var soundSource = `assets/Songs/${prevWord}.mp3`;
        audio.src = soundSource;
        audio.play();
    },
    checkKey: function(event) {
        var x = event.keyCode;
        let keyword = String.fromCharCode(x);
        let idx = word.indexOf(keyword);
    
        if (x >= 65 && x <= 90) {
            if (idx >= 0) {
                while (idx != -1) {
                    guess[idx] = keyword;
                    idx = word.indexOf(keyword, idx + 1);
                }
            }
            else if (incorrectLetters.join('').indexOf(keyword) >= 0) {
                alert('already used that');
            }
            else {
                remainGuesses--;
                incorrectLetters.push(keyword);
            }
    
            if (word === guess.join('')) {
                alert('You Rock!');
                winCount++;
                prevWord = word;
                game.newGame();
                game.change();
            }
            if (remainGuesses < 1) {
                alert('Give it another try');
                prevWord = word;
                game.newGame();
                game.change();
            }
            game.update();
        }
    }
};

document.addEventListener('keydown', game.checkKey);
game.newGame();



