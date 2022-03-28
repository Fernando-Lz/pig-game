// Variables
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// Initial conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

// Functions
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

const diceRoll = () => {
  if (playing) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    // Display dice
    diceElement.classList.remove('hidden');
    diceElement.src = `img/dice-${diceNumber}.png`;

    // Check for diceNumber 1
    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
};

const holdScore = () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 10) {
      playing = false;
      diceElement.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
};

const resetGame = () => {
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  activePlayer = 0;
  playing = true;
  currentScore = 0;
  scores = [0, 0];
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current1Element.textContent = 0;
  current0Element.textContent = 0;
  document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
};

// Event listeners
btnRoll.addEventListener('click', diceRoll);
btnHold.addEventListener('click', holdScore);
btnNew.addEventListener('click', resetGame);
