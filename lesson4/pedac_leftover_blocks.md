Problem
------------------
explicit rules

input: input any number of blocks
output: calculate the number of blocks left over after making the tallest possible structure
  top layer is a single block
  each cube has to be supported beneath by 4 cubes
    ?does each cube have to be fully on top of another?
    ?what constitutes a layer?
  blocks can support more than one block in an upper layer
    ?what does that mean?
    ?how many?
  no gaps between blocks

implicit rules

layer number correlates with blocks in a layer
layer number x layer number = number of blocks in layer

Examples
------------------
console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true

Data Structure
------------------
array to store layer number(index) and the layer amount(value)
counter/ blocks remaining
loop to add a layer at a time

Algorithm
------------------
count of current blocks left
array block holder
counterLayer = 0
  Loop
    (first iteration will be 0x0, second will be 1x1)
    check how many blocks we have and if it meets the 1x1 or 2x2 requirement
    if there are enough to add an entire layer,
      subtract the number of blocks from block number and add that number to our array holder
