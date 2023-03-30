tic tac toe
  description:
    using a board with nine spaces
    each player takes their turn marking the board taking up one spot at a time
    if a player gets 3 of their mark in a row they win
    if all nine places are taken up and nobody has one, it's a tie

  steps
    ---game loop-------------
    1. display board
    ---no winner loop--------
    2. player 1 takes turn
      1. update board
      2. check if winner
      3. if full display tie
    3. player 2 takes turn
      1. update board
      2. check if winner
      3. if full display tie
      ------------------------
    4. ask to play again
      yes: go to step 1
      -------game repeat------
      no: goodbye!


  











1. Display the initial empty 3x3 board.
  2. Ask the user to mark a square.
    Computer marks a square.
    Display the updated board state.
    If it's a winning board, display the winner.
    If the board is full, display tie.
    If neither player won and the board is not full, go to #2
  Play again?
  If yes, go to #1
2. Goodbye!!