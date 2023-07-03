//15min
/* Count the number of Duplicates

Write a function that will return the count of distinct 
case-insensitive alphabetic characters and numeric digits 
that occur more than once in the input string. 
The input string can be assumed to contain only alphabets 
(both uppercase and lowercase) and numeric digits.

Example

"abcde" -> 0  # no characters repeats more than once
"aabbcde" -> 2  # 'a' and 'b'
"aabBcde" -> 2  # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1  # 'i' occurs six times
"Indivisibilities" -> 2  # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2  # 'a' and '1'
"ABBA" -> 2  # 'A' and 'B' each occur twice

look for case insensitive alpha, or numeric digits
find the duplicates

if character occurs more than once += 1 to result
compare
'a' to all letters
if a.tolowercase matches any other charachters filter out that character add 1
*/

function duplicateCount(text){
  console.log(text.toLowerCase().split('').filter((val, i, arr) => {
    return arr.indexOf(val) === i && arr.lastIndexOf(val) !== i;
  }).length);
}

//duplicateCount("")//, 0);
duplicateCount("bbbbbcde")//, 0);
/* duplicateCount("aabbcde")//, 2);
duplicateCount("aabBcde")//, 2,"should ignore case");
duplicateCount("Indivisibility")//, 1)
duplicateCount("Indivisibilities");//, 2, "characters may not be adjacent") */