/*
count of current blocks left
array block holder
counterLayer = 0
  Loop
    (first iteration will be 0x0, second will be 1x1)
    check how many blocks we have and if it meets the 1x1 or 2x2 requirement
    if there are enough to add an entire layer,
      subtract the number of blocks from block number and add that number to our array holder
*/

function calculateLeftoverBlocks(numOfBlocks) {
  let counterLayer = 0;

  while(numOfBlocks >= counterLayer ** 2) {
    numOfBlocks -= (counterLayer ** 2);
    counterLayer += 1;
  }

  return numOfBlocks;
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true