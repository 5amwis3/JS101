//30
/* Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) 
that checks whether the two arrays have the "same" elements, with the same multiplicities 
(the multiplicity of a member is the number of times it appears). "Same" means, here, that 
the elements in b are the elements in a squared, regardless of the order.

Examples

Valid arrays

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square 
of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and 
so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays

If, for example, we change the first number to something else, comp is not returning 
true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks

a or b might be [] or {} (all languages except R, Shell).
a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, 
  Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, 
  R, Racket, Rust, Shell, Swift).
If a or b are nil (or null or None, depending on the language), the problem doesn't make 
sense so return false. 

order doesn't matter, could be in any order
iterate through a, if it has a match in b go on otherwise return false
match is a  * a
*/

/* 
attempt 2
7:26
7:35

arr1 array of nums
check to see that arr2 array of nums ** 2
  there is a match for each one in arr1


iterate through the arr1
  see if arr2 includes arr1[idx]
    if it does not, return false.
  otherwise delete that index

return true
*/

function comp(arr1, arr2) {  
  for (let idx = 0; idx < arr1.length; idx++) {
    if (!arr2.includes((arr1[idx])**2)) return false;
    arr2.splice(arr2.indexOf((arr1[idx]) ** 2), 1);
  }
  return true;
}


let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
console.log(comp(a1, a2))






/* 
attempt 1
30 min
 */

function comp1(arra, arrb) {
  if (!arra || !arrb) return false;

  for (let idx = 0; idx < arra.length; idx++) {
    let sqdNum = arra[idx] ** 2;
    if (arrb.includes(sqdNum)) {
      let matchIdx = arrb.indexOf(sqdNum)
      arrb.splice(matchIdx, 1);
    }
  }

  return arrb.length === 0;
}

/* let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
console.log(comp(a1, a2)) */