const resetBtn = document.querySelector(".reset");
const rollBtn1 = document.querySelector(".roll--1");
const holdBtn1 = document.querySelector(".hold--1");
const rollBtn2 = document.querySelector(".roll--2");
const holdBtn2 = document.querySelector(".hold--2");
const diceEl = document.querySelector(".dice-img");
const currentScoreEl1 = document.querySelector(".current-score--1");
const totalScoreEl1 = document.querySelector(".total-score--1");
const currentScoreEl2 = document.querySelector(".current-score--2");
const totalScoreEl2 = document.querySelector(".total-score--2");
const rulesBtn = document.querySelector(".rules");

rulesBtn.addEventListener("click", function () {
  document.querySelector(".rules-container").classList.toggle("hidden");
});

const score = [0, 0];
const curScore = [0, 0];
let player1 = true;
let player2 = false;
let playing = true;

const toggleButton = function () {
  rollBtn2.classList.toggle("active-btn");
  holdBtn2.classList.toggle("active-btn");
  rollBtn1.classList.toggle("active-btn");
  holdBtn1.classList.toggle("active-btn");
  document.querySelector(".player1").classList.toggle("active-border");
  document.querySelector(".player2").classList.toggle("active-border");
};

const resetButton = function () {
  rollBtn2.classList.remove("active-btn");
  holdBtn2.classList.remove("active-btn");
  rollBtn1.classList.add("active-btn");
  holdBtn1.classList.add("active-btn");
  document.querySelector(".player1").classList.add("active-border");
  document.querySelector(".player2").classList.remove("active-border");
};

rollBtn1.addEventListener("click", function () {
  if (!playing | !player1) return;
  diceEl.classList.remove("hidden");

  let randomNumber = Math.trunc(Math.random() * 6) + 1;

  if (randomNumber === 1) {
    curScore[0] = 0;
    player1 = false;
    player2 = true;
    toggleButton();
  } else {
    curScore[0] += randomNumber;
  }

  currentScoreEl1.textContent = curScore[0];

  // display dice
  diceEl.src = `img-dice/dice-${randomNumber}.png`;
});

holdBtn1.addEventListener("click", function () {
  if (!playing | !player1) return;
  score[0] += curScore[0];
  totalScoreEl1.textContent = score[0];
  curScore[0] = 0;
  currentScoreEl1.textContent = curScore[0];
  if (score[0] >= 100) {
    playing = false;
    alert("Player1 won 🏆 Press Reset button to play again");
  }
  player1 = false;
  player2 = true;
  toggleButton();
});

rollBtn2.addEventListener("click", function () {
  if (!playing | !player2) return;
  let randomNumber = Math.trunc(Math.random() * 6) + 1;

  if (randomNumber === 1) {
    curScore[1] = 0;
    player1 = true;
    player2 = false;
    toggleButton();
  } else {
    curScore[1] += randomNumber;
  }

  currentScoreEl2.textContent = curScore[1];

  // display dice
  diceEl.src = `img-dice/dice-${randomNumber}.png`;
});

holdBtn2.addEventListener("click", function () {
  if (!playing | !player2) return;
  score[1] += curScore[1];
  totalScoreEl2.textContent = score[1];
  curScore[1] = 0;
  currentScoreEl2.textContent = curScore[1];
  if (score[1] >= 100) {
    playing = false;
    alert("Player2 won 🏆 Press Reset button to play again");
  }
  player1 = true;
  player2 = false;
  toggleButton();
});

resetBtn.addEventListener("click", function () {
  curScore[0] = 0;
  curScore[1] = 0;
  score[0] = 0;
  score[1] = 0;
  currentScoreEl1.textContent = curScore[0];
  currentScoreEl2.textContent = curScore[1];
  totalScoreEl1.textContent = score[0];
  totalScoreEl2.textContent = score[1];
  playing = true;
  player1 = true;
  player2 = false;
  diceEl.classList.add("hidden");
  resetButton();
});
