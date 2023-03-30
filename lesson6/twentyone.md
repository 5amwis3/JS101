twenty One

Problem
  initialize deck with 52 cards, (4 suits)(13 values)
  dealer and player both dealt a hand of 2 cards

  additional rules
    values
      2-10 worth face value
      royalty woth 10 
      ace worth 1 or 11
        determined each time a new cards is drawn from deck
        (ace loop)
        (multiple aces?)

  player turn
    player goes first
      you can see your 2 cards and one of the dealers
      decide hit or stay
        (hit)
          player dealt another card
            if it exceeds 21
              bust and loose game
                dealer wins
        (stay)
          turn over 
  dealer turn
    if < 17, hit
    if >= 17, stay
  compare total value of cards and see who has the highest value
  tie is a tie


  mental model:
  -----------------
  display array of cards
  get 'h' or 's' input from user
    'h'
      add one card
      if (player busted) LOOSE!
    's'
      next player (dealer)

  **Data structures:**
    deck: Numbers in Array
      [['A', 'spades', 1 / 11],[3, 'hearts', 3],[2, 'clubs', 2],
      ['K', 'diamonds', 10]]
      value is a number
    Hand: basically small deck starting at 2 cards

**Algorithm**
  deck = empty array
  playerHand = empty array
  dealerHand = empty array
  ---o
  initialize dealerTotal
  initialize playerTotal
  initialize playerBust = false;
  initialize deck
  initialize deck function
  shuffle deck function
  dealcard function: 2 to each person

    ---1
    reveal cards
    CALCULATE CARDS functions
      count non ace cards total
      figure out aces total
    if total > 21, playerBust is true
    check if (playerBust) 
      break;  
    ask player if he wants 'hit or stay'
      if (stay) breaks loop;
      dealcard: 1 to player
    ---1

  if (playerBust is false)
    dealerTotal = dealer turn algorithm()
      if less than 17
        dealcard: 1 to dealer hand
    display 'dealer took his turn'
    display all cards!
  else 
    display 'you busted!'
    ask to play again?
  
  if dealer > 21
    'player wins!'
  else if player > dealer
    'player wins!'
  else if dealer > player
    'dealer wins'
  else
    'tie'

  ask to play again?

---o


  **functions**

        prompt(msg)
          output(=> msg)

        initialize decks
          deck = empty array
          playerHand = empty array
          dealerHand = empty array
          array of card options
          for each of the 4 suits
            iterate and assign all 13 cards to deck

        combining Shuffling and dealing to one function which deals random card;
          dealSHuffledCard function takes (card amount) and (whom it goes to)
            loop (card) amount of times
              get random index from deck
                if(not to dealer) deal random card to player
              get another random index
                if(not to player) deal random card to dealer


        revealCards(player or both)
            show playerHand loop
              print player cards one by one
                each card addes depth to hand visually
          if 'player'
            show one dealer card (2nd card)
          else
            show dealerHand loop
              print dealer cards one by one
                each card addes depth to hand visually

        calculateTotal (hand)
          variable total;

          loop through hand
            if card is num
              total  + num
            if card is an ace
              total + 11
            else
              total + 10 (face cards)

          get all aces in an array
            for each ace
              if total is greater than 21
                total - 10; (to get value of ace === 1 for that ace)
          return total

        dealerAiReturnTotal
          total = 0
          loop while total < 17
            add a card
            calculate new total

          return ctotal

        getPlayAgain(msg)
          prompt(would you like to play again)
            get answer
          return answer


          




