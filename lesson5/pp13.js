let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

function sum(arr) {
  return arr.reduce((accu, current) => {
    if (current % 2 === 1) {
      return accu + current;
    } else {
      return accu;
    }
  }, 0);
}

console.log(arr.sort((a, b) => sum(a) - sum(b)));