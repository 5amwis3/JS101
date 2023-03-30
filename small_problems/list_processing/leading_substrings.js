//function leadingSubstrings(str) {
//  let result = [];
//  for (let idx = 1; idx <= str.length; idx++) {
//    result.push(str.slice(0, idx));
//  }
//  console.log(result);
//}

function leadingSubstrings(str) {
  console.log(str.split('').map((_, idx) => str.slice(0, idx + 1)));
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]