const CARD_TYPES = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
const CARD_SUITS = ["Clubs", "Spades", "Hearts", "Diamonds"];

let WINNING_NUMBER = 21;
let readline = require('readline-sync');

function initializeDeck(deck) {
  for (let suitIdx = 0; suitIdx < CARD_SUITS.length; suitIdx++) {
    for (let cardIdx = 0; cardIdx < CARD_TYPES.length; cardIdx++) {
      deck.push([CARD_TYPES[cardIdx], CARD_SUITS[suitIdx]]);
    }
  }
}

function dealRandomCard(cards, whom, deck, playerHand, dealerHand) {
  let shuffle;

  for (let times = 0; times < cards; times++) {
    shuffle = Math.floor(Math.random() * deck.length);
    if (whom !== 'dealer') playerHand.push(...deck.splice(shuffle, 1));

    shuffle = Math.floor(Math.random() * deck.length);
    if (whom !== 'player') dealerHand.push(...deck.splice(shuffle, 1));
  }
}

function calculateTotal(hand) {
  let total = 0;

  hand.forEach(card => {
    if (Number.isInteger(card[0])) {
      total += card[0];
    } else if (card[0] === 'A') {
      total += 11;
    } else {
      total += 10;
    }
  });

  hand.filter(card => card[0] === 'A').forEach(_ => {
    if (total > WINNING_NUMBER) total -= 10;
  });

  return total;
}

function dealerAiReturnTotal(deck, dealerHand, playerHand, dealersLimit) {
  let total = calculateTotal(dealerHand);

  while (total < dealersLimit) {
    dealRandomCard(1, 'dealer', deck, playerHand, dealerHand);
    total = calculateTotal(dealerHand);
  }

  return total;
}

// get user input...  ---------------------------------------
function getUserName(msg) {
  prompt(msg);
  let playerName = readline.question() || 'Player';

  return playerName.trim()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ')
    .slice(0, 24);
}

function getNumber20to41(msg) {
  prompt(msg);
  prompt("Any number from 20 - 41!");
  let num = parseInt(readline.question(), 10) || 21;
  if (num < 20) num = 20;
  if (num > 41) num = 41;
  return num;
}

function getHitOrStay() {
  let hitOrStay;
  while (true) {
    prompt("Choose Hit or Stay\n=> Enter: ('h' or 's')");
    hitOrStay = readline.question().trim().toLowerCase();
    if (['h','s'].includes(hitOrStay)) break;
  }
  return hitOrStay;
}

function getPlayAgain() {
  let playAgain;
  while (true) {
    prompt("Continue Playing? ('y' or 'n')");
    playAgain = readline.question().trim().toLowerCase();
    if (['y', 'n'].includes(playAgain)) break;
  }
  return playAgain === 'y';
}
//-----------------------------------------------------------

// for display-----------------------------------------------
function prompt(msg) {
  console.log(`=> ${msg}`);
}

function header() {
  console.clear();
  console.log(`\n=============| ${WINNING_NUMBER} |============\n_______________________________\n\n`);
}

function showDealerCardForPlayer(dealerHand) {
  console.log(` ,-------------\n | ${dealerHand[0][0]}`.padEnd(22, ' ') +
  `${dealerHand[0][1]}`.padEnd(9, ' ') + '|\n |,-------------\n || **  ******* |\n ||             |');
  console.log(`${'='.repeat(31)}\n`);
}

function showHand(hand, total) {
  let cardBottom = 0;
  let bottomIndent = 0;

  hand.forEach((card, num) => {
    if (num > 4) cardBottom += 1;
    if (num > 3) bottomIndent = 1;
    console.log(String(`${''.padEnd(num - cardBottom, '|')},`.padEnd(14 + num - cardBottom, '-'))
      .padStart(num + 14 + 1, ' '));
    console.log(String(`|`.repeat(num + 1 - cardBottom) + ` ${card[0]}`.padEnd(4, ' ') +
      `${card[1]}`.padEnd(9, ' ') + '|').padStart(num + 15 + 1, ' '));
  });

  console.log(String(`${'|'.repeat(hand.length - cardBottom - bottomIndent)}             |`)
    .padStart(hand.length + 14 + 1, ' '));
  console.log(`${'='.repeat(31)}\n${total}\n`);
}
//-----------------------------------------------------------

// game flow  -----------------------------------------------
header();
prompt("Welcome to a customizable\n=> game of 21!\n");
let playerName = getUserName("Enter Your Name: ");
header();
WINNING_NUMBER = getNumber20to41("What number would you like\n=> to play too? (ex. 21)\n");
let dealersLimit = WINNING_NUMBER - 4;
let bestOfFiveDealer = 0;
let bestOfFivePlayer = 0;

while (true) {
  let deck = [];
  let playerHand = [];
  let dealerHand = [];
  let playerTotal = 0;
  let dealerTotal = 0;


  initializeDeck(deck);
  dealRandomCard(2, 'both', deck, playerHand, dealerHand);

  while (true) {
    playerTotal = calculateTotal(playerHand);
    header();
    prompt("Dealer");
    showDealerCardForPlayer(dealerHand);
    prompt(playerName);
    showHand(playerHand,  playerTotal);

    if (playerTotal > WINNING_NUMBER) break;
    if (getHitOrStay() === 's') break;
    dealRandomCard(1, 'player', deck, playerHand, dealerHand);
  }

  dealerTotal = dealerAiReturnTotal(deck, dealerHand, playerHand, dealersLimit);

  if (playerTotal > WINNING_NUMBER) {
    prompt("YOU BUSTED!");
    prompt("Better Luck Next Time!\n");
    bestOfFiveDealer += 1;
  } else {
    header();
    prompt("Dealer");
    showHand(dealerHand, dealerTotal);
    prompt(playerName);
    showHand(playerHand,  playerTotal);

    if (dealerTotal > WINNING_NUMBER) {
      prompt("The Dealer Busted!");
      prompt("You Win! CONGRATULATIONS!\n");
      bestOfFivePlayer += 1;
    } else if (playerTotal > dealerTotal) {
      prompt("You Win! CONGRATULATIONS!\n");
      bestOfFivePlayer += 1;
    } else if ( playerTotal < dealerTotal) {
      prompt("Dealer Wins!");
      prompt("Better Luck Next Time!\n");
      bestOfFiveDealer += 1;
    } else {
      prompt("Looks like a tie\n");
    }
  }

  prompt(`Dealer: ${bestOfFiveDealer} ${playerName.slice(0, 11)}: ${bestOfFivePlayer}\n`);

  if (bestOfFivePlayer > bestOfFiveDealer && bestOfFivePlayer === 3) {
    prompt("You beat the Dealer in best of 5!\n_______________________________\n");
  } else if (bestOfFiveDealer > bestOfFivePlayer && bestOfFiveDealer === 3) {
    prompt("The Dealer beat you in best of 5.\n_______________________________\n");
  }
  if (!getPlayAgain()) break;
}

prompt(`Thanks For Playing ${WINNING_NUMBER}!\n_______________________________\n\n`);