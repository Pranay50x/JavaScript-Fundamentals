let random_number = ((Math.random()*10 + 1).toFixed(0));
console.log(random_number);

const submit = document.querySelector('#subt');
const input = document.getElementById('guessField');

const prev_guesses = document.querySelector('.guesses'); 
const remaining_guess =  document.querySelector('.lastResult');
const low_or_hi = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');

const p  = document.createElement('p');

let prevGuesses = [];
let noOfGuesses = 1;

let playGame = true; 

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = String(input.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if(guess< 1){
        alert('Please enter a number greater than 1!');
    }
    else if(guess> 100){
        alert('Please enter a number less than 100!');
    }
    else{
        prevGuesses.push(guess)
        if(noOfGuesses === 11){
            displayGuess(guess)
            displayMessage(`Game Over: Number was ${random_number}`)
            endGame();
        }
        else{
            displayGuess(guess); 
            checkGuess(guess); 
        }
    }
}

function checkGuess(guess){
    if(guess === random_number){
        displayMessage(`Congratulations! You guessed correctly and in ${noOfGuesses} guesses`);
        endGame();
    }
    else if(guess<random_number){
        displayMessage('Wrong! Guess more Higher');
    }
    else if(guess>random_number){
        displayMessage('Wrong! Guess more Lower');
    }
}

function displayGuess(guess){
    input.value = '';
    prev_guesses.innerHTML += `${guess}, `;
    noOfGuesses++;
    remaining_guess.innerHTML = `${11 - noOfGuesses} `;
}

function displayMessage(message){
    low_or_hi.innerHTML = `<h1>${message}</h1>`;    
}

function newGame(){
    const newGameButton = document.querySelector('#newGame').addEventListener('click', function(e){
        random_number = ((Math.random()*10 + 1).toFixed(0));
        prevGuesses = []; 
        noOfGuesses = 1;
        prev_guesses.innerHTML = '';
        remaining_guess.innerHTML = `${11 - noOfGuesses}`;
        input.removeAttribute('disabled');
        low_or_hi.innerHTML = '';
        startOver.removeChild(p);

        playGame = true; 

    })
}

function endGame(){
    input.value = '';
    input.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}