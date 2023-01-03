let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];


console.log(arr.map(arr => {
  if (typeof (arr[0] === 'string')) {
    return arr.slice().sort().reverse();
  } else {
    return arr.slice().sort((a,b) => b - a);
  }
}));