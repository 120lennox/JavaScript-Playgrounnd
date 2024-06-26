let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkguess(){
    const userGuess = Number(guessField.value);
    if (guessCount === 1){
        guesses.textContent = "Previous guesses: ";
    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`;

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

    else {
        lastResult.textContent = "Wrong!";
        lastResult.style.backgroundColor = 'red';

        if (userGuess < randomNumber){
            lowOrHi.textContent = "Number too low!";
        }
        else if(userGuess > randomNumber){
            lowOrHi.textContent = "Number too high";
        } 
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
    
}

guessSubmit.addEventListener("click", checkguess);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start a new Game";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame(){
    guessCount = 1;

    const resetParas = document.querySelectorAll(".resultParas p");
    for (resetPara of resetParas){
        resetParas.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    lastResult.style.backgroundColor = "white";
    randomNumber = Math.floor(Math.random() * 100) + 1;
}

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    checkguess(); // Call the checkguess function
});



