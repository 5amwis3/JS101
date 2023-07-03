/*
23min
* Sum of Pairs

Given a list of integers and a single sum value, return the first two values 
(parse from the left please) in order of appearance that add up to form 
the sum.

If there are two or more pairs with the required sum, the pair whose 
second element has the smallest index is the solution.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * the correct answer is the pair whose second value has the smallest index
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * the correct answer is the pair whose second value has the smallest index
== [3, 7]
Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 
10,000,000 elements. Be sure your code doesn't time out. 

second value has smallest index

input: arr, num
ouput arr with two numbers 
store matches
  matches [[first,second, secIDX][...][...]]
  iterate through all sub arrays, if we have a match, store the necessary values

if arr has 

sum_pairs([10, 5, 2, 3, 7, 5],         10)

store nums we have seen
iterate over arr
  10
  if we have seen a 0
  return 0, 10

  5
  if we have seen a 5
  return 5, 5

  2
  if we have seen an 8
  return 8, 2

  
*/



function sumPairs(arr, sum){
  let stored = {};
  for (let idx = 0; idx < arr.length; idx++) {
    let previous = sum - arr[idx]
    let current = arr[idx]
    if (stored.hasOwnProperty(previous)) return [previous, current];
    stored[current] = true;
  }
}

console.log(sumPairs([1,2,3,4,1,0], 2))