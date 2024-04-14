let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('guesses');
const lastResult = document.querySelector('lastResult');
const lowOrHi = document.querySelector('lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkguess(){
    const userGuess = Number(guessField.value);
    if (guessCount === 1){
        guesses.textContent = "Previous guesses: ";
    }
    guesses.textContent = '${guesses.textContent} ${userGuess}';

    if (userGuess === randomNumber){
        lastResult.textContent = "Congratulations! thats the number";
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = "";
        setGameOver();
    }

    else if(guessCount === 10){
        lastResult.textContent = "!!Game Over!!";
        lastResult.style.backgroundColor = 'red';
        lowOrHi.textContent = "";
        setGameOver();
    }

    else if (guessCount < 10){
        lastResult.textContent = "Wrong!";
        lastResult.style.backgroundColor = 'red';

        if (userGuess <)
    }

    
}


