// Variables
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Initial conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

// Functions
const diceRoll = () => {
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  // Display dice
  diceElement.classList.remove('hidden');
  diceElement.src = `img/dice-${diceNumber}.png`;

  // Check for diceNumber 1
  if (diceNumber !== 1) {
    currentScore += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active');
  }
};

// Event listeners
btnRoll.addEventListener('click', diceRoll);
