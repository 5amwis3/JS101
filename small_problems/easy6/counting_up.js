//function sequence(num) {
//  if (num === 0) return 0;
//  return [(sequence(num - 1)), num].flat(Infinity);
//  }

//questions about spread ...

function sequence(num) {
  return [Array(num).keys()];       // no spread
}
// [ Object [Array Iterator] {} ]
// [ Object [Array Iterator] {} ]
// [ Object [Array Iterator] {} ]

function sequence(num) {
  return [...Array(num).keys()];    // spread
}
// [ 0, 1, 2, 3, 4 ]
// [ 0, 1, 2 ]
// [ 0 ]

function sequence(num) {
  return [Array(num + 1).keys()];   // no spread
}
// [ 0, 1, 2, 3, 4 ]
// [ 0, 1, 2 ]
// [ 0 ]

function sequence(num) {
  return [...Array(num + 1).keys()];  // spread
}
// [ 0, 1, 2, 3, 4 ]
// [ 0, 1, 2 ]
// [ 0 ]

console.log(sequence(5));    
console.log(sequence(3));   
console.log(sequence(1));    