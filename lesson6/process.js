/* 
-- Understand the Problem
    Input: 
    Output: 

    Main Idea: 

    Rules/edge cases: 

-- Structuring the Algorithm 
    1. Mental Models: (play out examples | Obj vs Array)
      * 

    2. Pick 1 Algorithm (Lang Agnostic | Specific Bounds): 
      * 

*/

let str = 'tacotactat';
let str2 = 'z'

console.log([...str].reduce((obj, char) => {
  obj[char] ? obj[char] += 1 : obj[char] = 1;
  return obj
}, {}))

console.log(!(str2 <= 'z' && str2 >= 'a'))