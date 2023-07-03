/*

11:56
The vowel substrings in the word codewarriors are o,e,a,io. T
he longest of these has a length of 2. 
Given a lowercase string that has 
alphabetic characters only (both vowels and consonants) and no spaces, 
return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!


iterate through str
if char is vowel
  current score + 1
    if current score > max score
      max score = current score
if char is consonant
 current score  = 0 

 return max score
*/

function solve(str) {
  let currentScore = 0;
  let maxScore = 0;
  let vowels = 'aeiou';

  for (let idx = 0; idx < str.length; idx++) {
    if (vowels.includes(str[idx])) {
      currentScore += 1;
      if(currentScore > maxScore) maxScore = currentScore;
    } else {
      currentScore = 0;
    }
  }
  console.log(maxScore);
}


solve("codewarriors") // 2)
solve("suoidea") // 3)
solve("ultrarevolutionariees") // 3)
solve("strengthlessnesses") // 1)
solve("cuboideonavicuare") // 2)
solve("chrononhotonthuooaos") // 5)
solve("iiihoovaeaaaoougjyaw") // 8)