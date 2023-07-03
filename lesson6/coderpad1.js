

// You are given an array of strings and an integer `k`.
// Your task is to return the first longest string consisting of `k` consecutive strings taken from the array.

// Example: 

// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
// "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

/* 
-- Understand the Problem   
    Input: array, int
    Output: str

    Main Idea: find n longest strings in the array

    Rules: array is 0 long, return ''
           int is <= 0, return ''
           array length is < n, return ''

-- Structuring the Algorithm  
    1. Mental Models: ( Repeating elements | Obj vs Array)
      * 
    sort array by longest
    slice off first N number of strings
    transform them into their index numbers
    
    iterate through original and concat strings if they are one of the lucky index's that are long

    return concatanated str

    2. Pick 1 Algorithm (Lang Agnostic | Specific Bounds): 
      * 


*/


function longestConsec(arr, num) {
  if (arr.length < num || arr.length ===  0) return '';
  if (num <= 0) return '';
  
  let sortedArr = arr.slice().sort((a,b) => b.length - a.length);
  let slicedArr = sortedArr.slice(0, num);
  let indexes = slicedArr.map(str => arr.indexOf(str));

  return arr.reduce((accu, curr, idx) => {
    if (indexes.includes(idx)) return accu + curr;
    return accu;
  },'');
}
// // Test Cases
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
console.log(longestConsec([], 3) === ""); // true
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true
