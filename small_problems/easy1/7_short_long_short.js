//function shortLongShort (str1, str2) {
//  if (str1.length < str2.length) {
//    return str1 + str2 + str1;
//  } else {
//    return str2 + str1 + str2;
//  }
//}

function shortLongShort(str1, str2) {
  if (str1.length > str2.length) {
    return str2 + str1 + str2;
  } else {
    return str1 + str2 + str1;
  }
}
console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"





/*
4:57

Write a function that takes two strings as arguments, 
determines the length of the two strings, 
and then returns the result of concatenating the shorter string, 
the longer string, and the shorter string once again. 
You may assume that the strings are of different lengths.


input 2 strings
output str

find out which str is longer
assign to longer
assign shorter to shorter

output short long short

*/

