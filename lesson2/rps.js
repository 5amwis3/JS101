const readline = require('readline-sync');
const MESSAGES = require('./rps_messages.json');
const VALID_CHOICES = ['rock', 'paper','scissors', 'Spock', 'lizard'];
let winner = '';
let scoreKeeper = [['User', 0], ['Computer', 0]];
let choice = '';
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
  prompt('header');
  console.log(`=>        USER: ${scoreKeeper[0][1]} VS COMPUTER: ${scoreKeeper[1][1]}`);
}

function compareWinner(choice, computerChoice) {
  return (choice === 'scissors' && computerChoice === 'paper') ||
         (choice === 'paper' && computerChoice === 'rock') ||
         (choice === 'rock' && computerChoice === 'lizard') ||
         (choice === 'lizard' && computerChoice === 'Spock') ||
         (choice === 'Spock' && computerChoice === 'scissors') ||
         (choice === 'scissors' && computerChoice === 'lizard') ||
         (choice === 'lizard' && computerChoice === 'paper') ||
         (choice === 'paper' && computerChoice === 'Spock') ||
         (choice === 'Spock' && computerChoice === 'rock') ||
         (choice === 'rock' && computerChoice === 'scissors');
}

function calculateWinner(choice, computerChoice) {
  if  (compareWinner(choice, computerChoice)) {
    winner = 'user';
  } else if (choice === computerChoice) {
    winner = 'tie';
  } else {
    winner = 'computer';
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

function tally(whoWon) {
  if (whoWon === 'user') {
    scoreKeeper[0][1] += 1;
  } else if (whoWon === 'computer') {
    scoreKeeper[1][1] += 1;
  }
}

function populateFullChoiceWord(whatWasChosen) {
  if (whatWasChosen !== '') {
    for (let index = 0; index < VALID_CHOICES.length; ++index) {
      if (VALID_CHOICES[index][0] === whatWasChosen[0].trimStart()) {
        choice = VALID_CHOICES[index];
      }
    }
  }
}

console.clear();

//repeats upon user request
while (bestOfFive < 5) {
  header();

  prompt('chooseAttack', VALID_CHOICES.join(', '));
  choice = readline.question();
  populateFullChoiceWord(choice);

  while (!VALID_CHOICES.includes(choice)) {
    prompt('caseSensative');
    prompt('badInput');
    choice = readline.question();
    populateFullChoiceWord(choice);
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  calculateWinner(choice, computerChoice);
  tally(winner);

  //display results
  console.clear();
  header();
  displayWinner(winner);
  prompt('youChose', choice);
  prompt('computerChose', computerChoice);
  console.log(); //space for clarity

  //play again?
  prompt('continue');
  answer = readline.question();

  while (answer.trim() !== '' && answer.trim().toLowerCase() !== 'q') {
    prompt('playAgainHelp');
    answer = readline.question().toLowerCase();
  }

  console.clear();

  if (answer.trim().toLowerCase() === 'q') break;
  if (winner !== 'tie') bestOfFive += 1;
}

//display final results
prompt('finalScore');
header();
if (scoreKeeper[0][1] > scoreKeeper[1][1]) {
  displayWinner('user');
} else if (scoreKeeper[0][1] < scoreKeeper[1][1]) {
  displayWinner('computer');
} else {
  displayWinner('tie');
}
prompt('finalScoreEND');