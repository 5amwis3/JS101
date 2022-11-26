const readline = require('readline-sync');
const MESSAGES = require('./rps_messages.json');
const VALID_CHOICES = {
  r: 'rock',
  p: 'paper',
  s: 'scissors',
  S: 'Spock',
  l: 'lizard'
};
const WINNING_MOVES = {
  rock: ['lizard', 'scissors'],
  paper: ['rock', 'Spock'],
  scissors: ['paper', 'lizard'],
  Spock: ['scissors', 'rock'],
  lizard: ['Spock', 'paper']
};
let winner = '';
let scoreKeeper = {
  user: 0,
  computer: 0,
  ties: 0
};
let choice = '';
let computerChoice = '';
let bestOfFive = 0;
let answer = '';

function prompt(msg1,msg2) {
  if (msg2 === undefined) {
    console.log(`=> ${MESSAGES[msg1]}`);
  } else {
    console.log(`=> ${MESSAGES[msg1] + msg2}`);
  }
}

function header() {
  console.clear();
  prompt('header');
  console.log(`=>        USER: ${scoreKeeper.user} VS COMPUTER: ${scoreKeeper.computer}`);
}

function calculateWinner(choice, computerChoice) {
  if  (WINNING_MOVES[choice].includes(computerChoice)) {
    winner = 'user';
    scoreKeeper.user += 1;
  } else if (choice === computerChoice) {
    winner = 'tie';
    scoreKeeper.ties += 1;
  } else {
    winner = 'computer';
    scoreKeeper.computer += 1;
  }
}

function displayWinner (whoWon) {
  if (whoWon === 'user') {
    prompt('youWin');
  } else if (whoWon === 'computer') {
    prompt('computerWins');
  } else {
    prompt("aTie");
  }
}

function populateFullChoiceWord(input) {
  choice = VALID_CHOICES[input] || input;
}

function getUserChoice() {
  prompt('chooseAttack', Object.values(VALID_CHOICES).join(' '));
  choice = readline.question();
  populateFullChoiceWord(choice);

  while (!Object.values(VALID_CHOICES).includes(choice)) {
    prompt('caseSensative');
    prompt('badInput');
    choice = readline.question();
    populateFullChoiceWord(choice);
  }
}

function getComputerChoice() {
  let index = Math.floor(Math.random() * Object.keys(VALID_CHOICES).length);
  computerChoice = Object.values(VALID_CHOICES)[index];
}

function displayChoices() {
    prompt('youChose', choice);
    prompt('computerChose', computerChoice);
    console.log(); //space for clarity
}

//repeats upon user request
while (bestOfFive < 5) {
  header();
  getUserChoice();
  getComputerChoice();
  calculateWinner(choice, computerChoice);

  header();
  displayWinner(winner);
  displayChoices();

  //play again?
  if (bestOfFive === 0 && scoreKeeper.ties <= 1) {
    prompt('continueBestOf5');
    answer = readline.question();
  } else {
    prompt('continue');
    answer = readline.question();
  }

  while (answer.trim() !== '' && answer.trim().toLowerCase() !== 'q') {
    prompt('playAgainHelp');
    answer = readline.question().toLowerCase();
  }

  if (answer.trim().toLowerCase() === 'q') break;
  if (winner !== 'tie') bestOfFive += 1;
}

//display final results
console.clear();
prompt('finalScore');
if (scoreKeeper.user > scoreKeeper.computer) {
  displayWinner('user');
} else if (scoreKeeper.user < scoreKeeper.computer) {
  displayWinner('computer');
} else {
  displayWinner('tie');
}
prompt('finalScoreEND');