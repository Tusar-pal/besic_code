// let random = parseInt(Math.rendom()*100+1);
// const submit = document.querySelector("#subt");
// const userInput = document.querySelector(".guessField");
// const previousguess = document.querySelector(".guesses");
// const remaining = document.querySelector(".lastResult");
// const result = document.querySelector(".resultParas");
// const loworhi = document.querySelector(".lowOrHi");

// const p = document.createElement('p');

// let playGame = true ;
// let prvGuess = [];
// let numGuess = 1;

// if(playGame == true){
//    submit.addEventListener('click',(e)=>{
//     e.preventDefault();
//         const guess = parseInt(userInput.value);
//         vaildguess(guess);
//    })
// }

// function vaildguess (guess){
//         if(isNaN(guess)){
//            displayMassage("Enter the valid number")
//         }else if(guess < 1){
//             displayMassage("Enter the valid number");
//         }else if (guess > 100){
//             displayMassage("Enter the valid number");
//         }else{
//             prvGuess.push(guess);
//          if(numGuess == 11){
//             displayMassage(`STOP GAME . Randon number was ${random}`);
//             endGame();
//           }
//           displayGuess(guess)
//           CheckGuess(guess);
//         }
// }

// function CheckGuess(guess){
//     if(guess === random){
//         displayMassage("guess is right")
//         endGame();
//     }else if(guess < random){
//         displayMassage("guess is Too high")
//     }
//     else if(guess > random){
//         displayMassage("guess is Too small")
//     }
// }

// function displayGuess(guess){
//   userInput.value = '';
//   previousguess.innerHTML += `${guess}, `;
//   numGuess++;
//   remaining.innerHTML = `${11 - numGuess} `;
// }

// function displayMassage(message){
//     loworhi.innerHTML = `${message}`

// }

// function endGame(){
//      userInput.value = '';
//   userInput.setAttribute('disabled', '');
//   p.classList.add('button');
//   p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
//   result.appendChild(p);
//   playGame = false;
//   newGame();
// }

// function startGame(){
//     const newGameButton = document.querySelector('#newGame');
//   newGameButton.addEventListener('click', function (e) {
//     random = parseInt(Math.random() * 100 + 1);
//     previousguess = [];
//     numGuess = 1;
//     previousguess.innerHTML = '';
//     remaining.innerHTML = `${11 - numGuess} `;
//     userInput.removeAttribute('disabled');
//     result.removeChild(p);

//     playGame = true;
//   });
// }


let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

