/*
A stack is a list of values that grows and shrinks dynamically. A stack may be implemented as an Array that uses two Array methods: Array.prototype.push and Array.prototype.pop.

A stack-and-register programming language is a language that uses a stack of values. Each operation in the language operates on a register, which can be thought of as the current value. 
The register is not part of the stack. An operation that requires two values pops the topmost item from the stack (i.e., the operation removes the most recently pushed value from the stack), 
operates on the popped value and the register value, and stores the result back in the register.

This sounds complex, but the behavior is straightforward and easy to walk through manually. Consider a MULT operation in a stack-and-register language. It removes the value from the stack, 
multiplies the removed stack value with the register value, then stores the result back in the register. 
For example, if we start with a stack of [3, 6, 4] (where 4 is the topmost item in the stack) 
and a register value of 7, the MULT operation mutates the stack to [3, 6] (the 4 is removed), and the result of the multiplication, 28, is left in the register. 
If we do another MULT at this point, 
the stack is mutated to [3], and the register is left with the value 168.

Write a function that implements a miniature stack-and-register-based programming language that has the following commands (also called operations or tokens):

n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register value.
All operations are integer operations (which is only important with DIV and REMAINDER).

Programs will be supplied to your language function via a string argument. 
Your function may assume that all arguments are valid programs — i.e., they will not do anything like trying to pop a non-existent value from the stack, 
and they won't contain any unknown tokens.

Initialize the stack and register to the values [] and 0, respectively.

Examples:

Copy Code
minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)



let todoLists = [
  {
    id: 1,
    listName: 'Groceries',
    todos: [
      { id: 1, name: 'Bread', completed: false },
      { id: 2, name: 'Milk', completed: false },
      { id: 3, name: 'Apple Juice', completed: false }
    ]
  }
];
todoLists[0].todos[2] = 'Orange Juice';

console.log(todoLists)
*/







/*
snale / swirl through output arrays
[[1,  2,  3,  4,   5], 
 [6,  7,  8,  9,  10], 
 [11, 12, 13, 14, 15], 
 [16, 17, 18, 19, 20], 
 [21, 22, 23, 24, 25]]

  reverse step

 [16, 17, 18, 19, 20],
 [11, 12, 13, 14, 15], 
 [6,  7,  8,  9,  10], 
    
 [7,  8,   9], 
 [12, 13, 14], 
 [17, 18, 19],
  
  
snail(array) #=> 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13

    [1,   2,  3,  4,  5, 6], 
    [20, 21, 22, 23, 24, 7], 
    [19, 32, 33, 34, 25, 8], 
    [18, 31, 36, 35, 26, 9], 
    [17, 30, 29, 28, 27, 10], 
    [16, 15, 14, 13, 12, 11]]
    
    [17, 30, 29, 28, 27, 10],
    [18, 31, 36, 35, 26, 9], 
    [19, 32, 33, 34, 25, 8], 
    [20, 21, 22, 23, 24, 7], 

    [21, 22, 23, 24], 
    [32, 33, 34, 25], 
    [31, 36, 35, 26], 
    [30, 29, 28, 27],
input nested array
output array

swirl = []
loop
  1. output first array
    delete from array
    push to swirl
    if arr length is empty, break;
  2. output last ele of all arrays
      delete from array
      push to swirl
  3. output last array reversed
    delete from array
    push to swirl
    if arr length is empty, break;
  4. reverse outer array order
  5. output first ele of all arrays
    delete from array
    push to swirl
  5. reverse outer array order

*/
//function alphanumeric(str){
//  return str.match(/[0-9a-zA-Z]/) ? true : false;
//}

//function alphanumeric(str){
//  return str.split('').every(char => {
//    return (char.toLowerCase() !== char.toUpperCase() || parseInt(char) === char * 1);
//  })
//}

//function alphanumeric(string){
//  return /[0-9a-zA-Z]/.test(string)
//}
//
//
//console.log(alphanumeric("Mazinkaiser"));
//console.log(alphanumeric("hello world_"));
//console.log(alphanumeric("PassW0rd"));
//console.log(alphanumeric("     "));

//function alphanumeric(string){
//  return /^[0-9a-z]+$/i.test(string);
//}



//let count = 0;
//let a = ['well', 'hi', 'there', '!'];
//a[6] = 3;
//a['umbrella'] = 'taco'
//a.length = 23;
//console.log(a)
//a.sort();
//
//console.log(a)
//
//
//for (let el in a) {
//  console.log(el);
//}
//
//console.log(Object.keys(a))

// ```javascript
// array.forEach(element => {
//   console.log(element.foo);
// });
// ```


//find next biggest number by rearranging the digits
/*
input num
output num (next biggest)

loop
0. increase number by one
  1. if number has same digits as original,
      
  2. return that number !!



if number has same digits as original function...
    counter = original
    loop
      counter += 1
      turn original into arr
    
      loop through each digit of counter
        if digit is in counter
          splice num out
      if array.length === 0 return counter

console.log(commonChars('bella', 'label', roller'));
console.log(commonChars('ab', 'bc'));

input arr
output array (common letters)

turn everything but longest str into array 

iterate through longest word letters
r,o,l,l,e,r

  filter out non arrays
  look at each array
    if all arrays return true add that letter to matches
      arrays...
        if current letter matches, 
          splice that letter out
          return true

FN
input array of strings
want to compare 2 at a time and compare the last commmon characters with next one
  create commonChars and initialize to str 1 but in array form

  update commonChars with = compareFN(commonChars, (str2 converted into array))

compareFN
  pass two arrays to compare at a time

    clone second wordArray (to delete matches)
    create matches array

    compare all letters from first word
      to all letters in second word

      if they match
      add letter to matches array
      delete from our clone
      break inner loop

  return commonChars

input 2 strings
output boolean

get all substrings of first word
  in each substring, compare to every substring within second word
  if there is a match greater than 2 characters, return true
return false




input array of strings
output string || ''


function takes array of strings
variable match = '';
variable shortest = splice out the shortest string
  loop through string lengths


compare shortest substrings from index 0
  compare that to every substring within the other strings

  let match = 
  compare 2 at a time

  loop and compare all index[x] with short===longer
  get length of arr loop length times getting each array of strings
    

return match


if long current iteration includes short 



accept array of strings
take first letter
  if every strings starts with that add to match
take first and second
  if every strings starts, add to match
take...


function prefexMatch(array) {
  let match = '';
  for (let endIdx = 1; endIdx < array[0].length + 1; endIdx++) {
      if (array.every(str => array[0].slice(0,endIdx) === str.slice(0,endIdx))) {
        match = array[0].slice(0,endIdx);
      }
    }

  console.log(match);
}


prefexMatch(['interstellar', 'interspecies']);

input array of strings
output string

comparing shortest str to the other strings in the array 935
  sorted array
  shortestStr = sortedArr.splice

  shortestStr = 'flow'
  sortedArr = ['flower', 'flight']

  while shorteStr > 0
   if every str in sortedArr starts with shortestStr
      return shoretestStr
    else
      delete last char of shortest str

add up all the numbers to a given middle index ( not including) 12:00
  0 - (0)  (index value)
  0 - (1)  index value
  0 - 2
  0 - 3
  ...
  skip an index 
    add up all the numers on the other side ||| adding up function placed here
    1 - end   1 is the (index value + 1)
    2 - end
    3 - end
    4 - end    end is length 5
    ...

    end when index < array.length

    if they equal eachother
      return index
return -1;

function addArray
  return sum of all numbers in array
     
     
function findEvenIndex(array) {
  return array.findIndex((_, midIdx, nums) => {
    let leftSum = addArray(nums.slice(0,midIdx));
    let rightSum = addArray(nums.slice(midIdx + 1));
    return leftSum === rightSum;
  })
}

function addArray(array) {
  return array.reduce((accu, curr) => accu + curr, 0);
}

console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]));
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));


Determine how many
  sunk
  damaged
  untouched

  from set amount of attacks

  input(board, attacks)
  output: obj with { sunk: 0, damaged: 2 , notTouched: 1, points: 0 }
    0 = not occupied
    other digit represents boat
    we don't know 
      board size or 
      boat dimensions

  attacks[x,y]
    at least 1 per game
    no duplicates

  board
    array of arrays
    board = [[0,0,0,2,2,0],
            [0,3,0,0,0,0],
            [0,3,0,1,0,0],
            [0,3,0,1,0,0]];
    attacks = [[2, 1], [1, 3], [4, 2]];
    damagedOrSunk(board, attacks);

    scoring ( use atks )
      1 point for ea boat sank
      .5 points for each boar hit at least one
        not including sunk boats
      -1 for ea whole boat that was not hit

      sunk
        all boats sunk
      dmg
        all boats that have been hit at least once
      not touched
        not hit at least once


  iterate through board
    find all boats
      iterate through horizontally finding elements of value
        ...that hve not already been acounted for
        if value > 0 and value is not property in boats obj
          check:
            create arr of spaces with boat spots [x,y]
            if (rest of arr after current idx has same values)
            horizontally
                check next space in arr until length
                add spot to spaces
            if (spaces.lenth === 0 )
              vertically
                check next array over same idx
                add spot to spaces
            if (spaces.lenth === 0)
              diagonally
                check next arr over +1 idx
                add spot to spaces
          create boat obj
                Initially all have -1 values
                  3 {points, length, spaces [[]], hits}
                  4 {points, length, spaces [[]], hits}
              define name
              initialize points to -1
              initialize spaces to spaces arr
              initialize length spaces length
    
    use atks, and update boat points accordingly
      check all boats to see if they have attack
        if boat has atk
          if boat hit is 0
            points = .5;
            hits += 1
          if boat hit is === spaces.length
            points = 1
          break;

          

    output obj using data from boats obj
      { sunk: 0, damaged: 0 , notTouched: 0, points: 0 }


    
 */

/* 

8:05
8:16
mental model

  1st flower
  2nd flow

    common 
      flow

  1st flow
  2nd flight

    common
      fl

  input arr
  output str

data structure
  arrays

algo

  set compare1 to array's 0th idx

  1. compare 2 words from the array at a time by iterating through
    compare2 assign to iteration index (start at 1)
    set saved to ''

    2. compare each letter of the words
      compare1 vs compare2
      if letter is equal
        add to save str
      if letter is not equal
        compare1 = saved

  return compareWorrd


*/

function commonPrefix(arr) {
  let compareWord = arr[0];
  for (let idx = 1; idx < arr.length; idx += 1) {
    let save = '';
    for (let charIdx = 0; charIdx < compareWord.length; charIdx += 1) {
      if (compareWord[charIdx] === arr[idx][charIdx]) {
        save += arr[idx][charIdx];
      } else {
        compareWord = save;
      }
    }
  } 
  return compareWord;
}

// Test Cases
console.log(commonPrefix(["flower", "flow", "flight"]) === "fl"); // true
console.log(commonPrefix(["dog", "racecar", "car"])  === ""); // true
console.log(commonPrefix(["interspecies", "interstellar", "interstate"])  === "inters"); // true
console.log(commonPrefix(["throne", "dungeon"]) === ""); // true
console.log(commonPrefix(["throne", "throne"]) === "throne"); // true */ 

