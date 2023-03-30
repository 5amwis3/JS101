In the first question, you didn't identify the error being thrown, and instead just explained that witty would not exist on line 10, without going into the implications this "lack of existence" would have in the output. When Antonina ran the code, you were able to explain why the error was thrown, although the language you used was not as precise as we would have wanted.

In the third code snippet, you overlooked the bar variable for the reason that it referenced the same object that foo did. Being able to distinguish between a new object and a new variable is something we expect you to have mastered at this point. Moreover, it took you quite some time to decide whether to include the value of the tasty property as a new primitive or not. Even though you ended up including it in your final answer, it felt more like a gamble or an instinctive decision than a reasoned one. That showed mostly because you could not justify your decision, afterward. Lastly, you did not identify the object keys as being primitive values.

1. Describe `variable scoping rules` in Javascript using `2` code examples.
2. Explain how `primitive values` behave both in regards to 
    1. `functions` (being passed as arguments or returned by them) and in 
    2. `general`. Use code examples to demonstrate your claims.

# Variable Scoping and Primitive Values

## Primitive Values

Let's look at some specific examples of primitive values. 

### Example 1

The code below demonstrates pass by value and shows that primitive values are immutable. In our example, when we call `logAnObj`, `a` will pass it's value `1` to the defined paramater `a`. This is a seperate instance of the same value. Inside of `obj`, argument `a` has the copy of the value `1` that we set as the value for the property `'a'` within `obj`. This will not be affected by the reasignment of argument `a` on line 9 because property `'a'` just has the primitive value `1`. It is immutable. Line 11 calls `console.log` and passes in `obj` which logs `{ a: 1, b: 2, c: 3 }` to the console.

``` javascript
let a = 1;

function logAnObj (a) {
  let obj = {
    a: a,
    b: 2,
    c: 3
  }
  a = 2;

  console.log(obj);
}

logAnObj(a);
```
___

### Example 2

Alternatively if we pass by reference as seen below, we will be able to manipulate array `a`'s index and consequently change the logged output of `obj`.

``` javascript
let a = [1];

function logAnObj (a) {
  let obj = {
    a: a,
    b: 2,
    c: 3
  }
  a[0] = 2;

  console.log(obj);
}

logAnObj(a);
```

This demonstrates pass by reference. When we call our function `logAnObj()` and pass in our global variable `a`, this passes a pointer to the functions defined parameter `a`. Both the argument and global varabiables `a` and `a` both point to the same array. We set the property `'a'` to our array's pointer. When we try to reasign index 0 of our array to `2` on line 9, we are successful, as this is a mutating operation. All of the `a` arrays with this pointer now point to `[2]`. When we output to the console we will see `obj` as: `{ a: [ 2 ], b: 2, c: 3 }`. 

___

## Scope

Variable scope plays a large role in most code. It is essential to master as to more easily understand concepts that get more complex. Missing this will surely slow thought processing down in the future. Some common concepts to remember:
  1. Where the variable is declared, affects where it is able to be accessed. 
  2. Variables declared in an outer scope are also accessable in an inner scope unless shadowed.
  3. Variables declared in an inner scope are only accessable within their confines, and within nested scopes within their own declared scope.

### Example 1

In the below example we try to find out what will be output to the console when passing in `inner` as an argument to  `console.log()`. 

``` javascript
{
  let inner = 3;
}

console.log(inner);
```

However we won't see anything output because inner was declared in an inner block. This rather results in a refference error. The place we declare our variable is where it's scope is created. `inner` is only available inside the block defined by the curly braces. Trying to access `inner` outside of it's scope is the problem. 

### Example 2

This second example demonstrates global variables.

``` javascript
let global1 = 1

function createVar () {
  global1 = 2;
  global2 = 2;
}

createVar();
console.log(global1);
console.log(global2);
```

Line one declares and initializes `global1`. It is available globally, including our inner scopes because it is declared at the top level. 

When we call the `createVar` function, `global1` is reasigned to `2` and we assign `2` to a new variable `global2`. Undeclared variables like this act as a global variables.

The second global variable, `global2`, demonstrates a unique example that defies some common sense and is useful to remember. Since `global2` is not declared with a keyword like **let** or **const**, it will be accessable globally when the function `createVar` is called. The last two lines call `console.log()` and pass in our two global variables as arguments. They both log 2 seperate instances of the value `2`.
___









// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Note:
// All given inputs are in lowercase letters a-z.

// Test Cases
console.log(commonPrefix(["flower", "flow", "flight"]) === "fl"); // true
console.log(commonPrefix(["dog", "racecar", "car"])  === ""); // true
console.log(commonPrefix(["interspecies", "interstellar", "interstate"])  === "inters"); // true
console.log(commonPrefix(["throne", "dungeon"]) === ""); // true
console.log(commonPrefix(["throne", "throne"]) === "throne"); // true


45min








// The maximum sum subarray problem consists in finding the maximum sum
// of a contiguous subsequence in an array of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) -- should return 6: [4, -1, 2, 1]
// If the array is made up of only negative numbers, return 0 instead.
// An empty array is considered to have zero greatest sum.
// Note that the empty array is also a valid argument array.

// Test Cases
console.log(maxSequence([]) === 0); // true 
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
console.log(maxSequence([11]) === 11); // true
console.log(maxSequence([-32]) === 0); // true
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true

input: array
otput: number

rules:
- return MAXIMUM SUM of subARRS 
- if array is made of ONLY negative numbers, return 0
- if array.lenght is 0, return 0















// PROBLEM:

// Given a string, write a function changeMe which returns the same
// string but with all the words in it that are palindromes uppercased.

// changeMe("We will meet at noon") === "We will meet at NOON"
// changeMe("No palindromes here") === "No palindromes here"
// changeMe("") === ""
// changeMe("I LOVE my mom and dad equally") === "I LOVE my MOM and DAD equally"