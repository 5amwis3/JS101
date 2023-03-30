//function substrings(str) {
//  let result = [];
//  console.log(str.split('').forEach((_, index) => {
//    str.split('').forEach((_, endIndex) => {
//      console.log(index, endIndex);
//      result.push(str.slice(index, endIndex + 1));
//    });
//  }));
//  console.log(result.filter(str => str !== ''));
//}

//function substrings(str) {
//  let substrings = [];
//  for (let index = 0; index < str.length; index++) {
//    substrings.push(leadingSubstrings(str.slice(index)))
//  }
//}

function substrings(str) {
  return str.split('').map((_, idx) => leadingSubstrings(str.slice(idx))).flat();
}

function leadingSubstrings(str) {
  return str.split('').map((_, idx) => str.slice(0, idx + 1));
}

console.log(substrings('abcde'));

