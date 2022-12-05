//function penultimate(str) {
//  return str.split(' ').slice(-2, -1).join('');
//}

//returns middle world of str
function penultimate(str) {
  if (str !== '') {
    arr = str.split(' ');
    return arr[Math.floor(arr.length/2)];
  } else {
    return 'nothing was entered...'
  }
}

console.log(penultimate(""));
console.log(penultimate("word"));
console.log(penultimate("a last word"));
console.log(penultimate("Launch School is really great!"));
