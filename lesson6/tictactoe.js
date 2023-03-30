const DEFAULT_MARKER = ' ';
const PLAYER_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINNING_SETS = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

let readline = require('readline-sync');
let currentPlayer = '';
let playAgainAnswer = '';

function prompt(msg) {
  return console.log(`=> ${msg}`);
}

//board structure
function displayBoard(board) {
  console.clear();
  console.log(`You are ${PLAYER_MARKER}. Computer is ${COMPUTER_MARKER}`);
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

//initialize board to default spaces
function initializeBoard() {
  let newBoard = {};

  for (let space = 1; space <= 9; space++) {
    newBoard[space] = DEFAULT_MARKER;
  }

  return newBoard;
}

//find empty spaces
function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === DEFAULT_MARKER);
}

//bonus features
function joinOr(board, delimiter = ', ', word = 'or') {
  switch (emptySquares(board).length) {
    case 0:
      return '';
    case 1:
      return `${emptySquares(board)[0]}`;
    case 2:
      return emptySquares(board).join(` ${word} `);
    default:
      return emptySquares(board)
        .slice(0, emptySquares(board).length - 1)
        .join(delimiter)
  + `${delimiter}${word} ${emptySquares(board)[emptySquares(board).length - 1]}`;
  }
}

function openWinningSets(board) {
  return WINNING_SETS.filter(set => set
    .map(space => board[space])
    .includes(DEFAULT_MARKER));
}

function strategyAI(board) {
  let goodMove = false;

  openWinningSets(board).forEach(set => {
    let markerSet = set.map(mark => board[mark]);
    let playrMarks = markerSet.filter(mark => mark === PLAYER_MARKER).length;
    let compMarks = markerSet.filter(mark => mark === COMPUTER_MARKER).length;

    if (compMarks === 2 ) {
      goodMove = set[markerSet.indexOf(DEFAULT_MARKER)];
    } else if (playrMarks === 2) {
      goodMove = set[markerSet.indexOf(DEFAULT_MARKER)];
    }
  });

  return goodMove;
}

//take turns
function playerChooseSquare(board) {
  let space;

  while (true) {
    prompt(`Choose Square (${joinOr(board)})`);
    space = readline.question().trim();
    if (emptySquares(board).includes(space)) break;

    prompt("Sorry that's not a valid choice");
  }

  board[space] = PLAYER_MARKER;
}

function computerChoosesSquare(board) {
  let betterMoveIndex = strategyAI(board);

  if (betterMoveIndex) {
    board[betterMoveIndex] = COMPUTER_MARKER;
  } else if (board[5] === DEFAULT_MARKER) {
    board[5] = COMPUTER_MARKER;
  } else {
    let randIndex = Math.floor(Math.random() * emptySquares(board).length);
    let space = emptySquares(board)[randIndex];

    board[space] = COMPUTER_MARKER;
  }
}

//finding results
function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  return WINNING_SETS.reduce((winner, winningSet) => {
    if (winningSet.every(mark => board[mark] === PLAYER_MARKER)) {
      return winner + 'Player';
    } else if (winningSet.every(mark => board[mark] === COMPUTER_MARKER)) {
      return winner + 'Computer';
    } else {
      return winner;
    }
  }, '');

}

function promptWhoStarts(msg) {
  while (true) {
    prompt(msg);
    let starting = readline.question().trim().toLowerCase();
    if (starting === 'y') {
      currentPlayer = 'player';
      break;
    } else if (starting === 'n') {
      currentPlayer = 'computer';
      break;
    }
  }
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'player') {
    return playerChooseSquare(board);
  } else {
    return computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer === 'player') {
    return 'computer';
  } else {
    return 'player';
  }
}

//game flow
while (true) {
  let board = initializeBoard();

  promptWhoStarts("Do you wan't to start? (y/n)");

  while (true) {   //player starts
    displayBoard(board);
    chooseSquare(board, currentPlayer);
    if (someoneWon(board) || boardFull(board)) break;

    currentPlayer = alternatePlayer(currentPlayer);
  }

  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} Won!`);
  } else {
    prompt(`It's a Tie!`);
  }

  while (true) {
    prompt('Play Again? (y or n)');
    playAgainAnswer = readline.question().trim().toLocaleLowerCase();
    if (playAgainAnswer === 'n' || playAgainAnswer === 'y') break;
  }
  if (playAgainAnswer === 'n') break;

}

prompt('Thanks for playing Tic Tac Toe!');
//passing function to a variable
//  look in first class function section in lessons
