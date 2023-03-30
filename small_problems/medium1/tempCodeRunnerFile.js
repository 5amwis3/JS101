let fibNums = {
  1: 1,
  2: 1,
};

function fibs(nthPlace) {
  if(!fibNums[nthPlace]) {
    fibNums[nthPlace] = fibs(nthPlace -1) + fibs(nthPlace - 2);
  }
  return [1 + fibNums[nthPlace]];
}