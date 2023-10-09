const newGame = document.querySelector('.new-game');

newGame.addEventListener('click', () => {
  location.reload();
});

const playerOneSection = document.querySelector('.player-one-section');
const playerTwoSection = document.querySelector('.player-two-section');
const playerOneScore = document.querySelector('.player-one-score');
const playerOneScoreDiv = document.getElementById('player-one-score-div');
const playerTwoScore = document.querySelector('.player-two-score');
const playerTwoScoreDiv = document.querySelector('.player-two-score-div');
const dice = document.querySelector('.dice');
const dice2 = document.querySelector('#dice-two');
const rollDice = document.querySelector('.roll-dice');
const hold = document.querySelector('.hold');
let playerOneScoreDivValue = 0;
let playerTwoScoreDivValue = 0;
let activePlayer = 1; 

const targetScoreInput = document.getElementById('target-score');
let targetScore = parseInt(targetScoreInput.value);

const form = document.querySelector('.form-submit');
form.addEventListener('submit', (e) => {
  e.preventDefault();
});

targetScoreInput.addEventListener('input', function () {
  targetScore = parseInt(targetScoreInput.value);
});

dice.classList.add('hidden');
dice2.classList.add('hidden');

rollDice.addEventListener('click', function () {
  dice.classList.remove('hidden');
  dice2.classList.remove('hidden');
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber);
  console.log(randomNumber1);
  dice.src = `assets/images/dice-${randomNumber}.png`;
  dice2.src = `assets/images/dice-${randomNumber1}.png`;
  
  if (activePlayer === 1) {
    if (randomNumber !== 1) {
      playerOneScoreDivValue += randomNumber + randomNumber1;
      playerOneScoreDiv.textContent = playerOneScoreDivValue;
      if(playerOneScoreDivValue >= targetScore){
        alert('Player 1 Won!');
        location.reload();
      }
      if (randomNumber + randomNumber1 === 12) {
        playerOneScoreDivValue = 0;
        playerOneScoreDiv.textContent = '0';
        activePlayer = 2; 
      }
    } else {
      activePlayer = 2; 
    }
  } else if (activePlayer === 2) {
    if (randomNumber !== 1) {
      playerTwoScoreDivValue += randomNumber + randomNumber1;
      playerTwoScoreDiv.textContent = playerTwoScoreDivValue;
      if(playerTwoScoreDivValue >= targetScore){
        alert('Player 2 Won!');
        location.reload();
      }
      if (randomNumber + randomNumber1 === 12) {
        playerTwoScoreDivValue = 0;
        playerTwoScoreDiv.textContent = '0';
        activePlayer = 1;
      }
    } else {
      activePlayer = 1;
    }
  }
});

hold.addEventListener('click', function(){
  if (activePlayer === 1) {
    activePlayer = 2;
    playerOneScore.textContent = playerOneScoreDivValue;
    playerOneScoreDiv.innerHTML = '0';
  }
  else if(activePlayer === 2) {
    activePlayer = 1;
    playerTwoScore.textContent = playerTwoScoreDivValue;
    playerTwoScoreDiv.innerHTML = '0';
  }
});

