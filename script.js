// Variables
const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const current0Element = document.querySelector('#current--0');
const current1Element = document.querySelector('#current--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScore = 0;

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
    current0Element.textContent = currentScore;
  }
};

// Event listeners
btnRoll.addEventListener('click', diceRoll);
