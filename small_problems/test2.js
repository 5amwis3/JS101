var board = [ [3, 0, 1],
              [5, 0, 1],
              [0, 5, 0], 
              [0, 0, 5] ];

var attacks = [[5, 5]]
console.log(damagedOrSunk(board, attacks));

function damagedOrSunk (board, attacks) {
  let boats = {};
  board.reverse();
  board.forEach((line, lineIdx) => {
    line.forEach((space, spaceIdx) => {
      if (space > 0 && !boats.hasOwnProperty(space)) {
        let spaces = [];
        boats[space] = {};
        //horizontal check
        if (line.slice(spaceIdx + 1).some(val => val === space)) {
          for(let spaceNum = 0; spaceNum < board[lineIdx].length; spaceNum++) {
            if (board[lineIdx][spaceNum] === space) {
              spaces.push([spaceNum, lineIdx]);
            }
          } 
        } else if (board[lineIdx + 1][spaceIdx] === space) { //vertical check
          for (let lineNum = lineIdx; lineNum < board.length; lineNum++) {
              if (board[lineNum][spaceIdx] === space) {
                spaces.push([spaceIdx, lineNum]);
              }
          }
        } else if (board[lineIdx + 1][spaceIdx + 1] === space) { //diagonal check
          let farthest = Math.max(board.length, line.length)
          for (let count = 0; count < farthest; count++) { 
            if (lineIdx + count >= board.length || spaceIdx + count >= line.length) break;
            if (board[lineIdx + count][spaceIdx + count] === space) {
              spaces.push([spaceIdx + count, lineIdx + count]);
            }
          } 
        } else { //other diagonal
          let farthest = Math.max(board.length, line.length)
          for (let count = 0; count < farthest; count++) { 
            console.log( space)
            if (lineIdx + count === board.length - 1 || spaceIdx - count < 0) break;
            if (board[lineIdx + count][spaceIdx - count] === space) {
              spaces.push([spaceIdx - count, lineIdx + count]);
            }
          } 
        }
        boats[space]['spaces'] = spaces;
      }
    });
  });

  for (let num in boats) {
    boats[num].points = -1;
    boats[num].length = boats[num].spaces.length;
    boats[num].hits = 0;
  }

  attacks.forEach(atk => {
    for (let num in boats) {
      let atkRow = atk[0];
      let atkLine = atk[1];
      boats[num].spaces.forEach(check => {
        checkRow = check[0] + 1;
        checkLine = check[1] + 1;
        if (atkLine === checkLine && atkRow === checkRow) {
          boats[num].hits += 1;
        }
      })
    }
  });

  let results = {
    sunk: 0, //done
    damaged: 0, //done
    notTouched: 0,
    points: 0
  };

  for (let num in boats) {
    if (boats[num].hits === boats[num].length) {
      boats[num].points = 1;
      results.points += 1;
      results.sunk += 1;
    } else if (boats[num].hits > 0) {
      boats[num].points = .5;
      results.points += .5;
      results.damaged += 1;
    } else {
      results.notTouched += 1;
      results.points -= 1;
    }
  }

return results;
}