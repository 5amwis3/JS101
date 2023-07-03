/* Complete the function scramble(str1, str2) that returns true if a 
portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples 

compare str2 letters with char in str1
  if a match add to duplicate;
  'world' iterate through
    if 'w' = char in arr2
      add arr2 char to duplicate arr


  if duplidate === str2 return true else false


  compare 
    'w' 'r'
    'w' 'k'
    'w' 'w' take find 'w' out and add to result
    'o'
      if match reasign str1 to new str minus index
      break loop iteration
58
      add all of root to obj with how many occurences of each letter
      subtract all of str from root
        if every letter's value is below 1
          return true


*/

function scramble(str, root) {
  let letters = {};

  root.split('').forEach(char => {
    if (letters[char]) {
      letters[char] += 1;
    } else {
      letters[char] = 1;
    }
  })

  str.split('').forEach(char => {
    if (letters[char]) letters[char] -= 1;
  })
  
return Object.values(letters).every(num => num < 1);
}

/*     console.log(scramble('rkqodlw',           'world'      ))// , true );
    console.log(scramble('cedewaraaossoqqyt', 'codewars'   ))// , true );
    console.log(scramble('katas',             'steak'      ))// , false); */
    console.log(scramble('scriptjavx',        'jjjavascript' ))// , false);
/*     console.log(scramble('scriptingjava',     'javascript' ))// , true );
    console.log(scramble('scriptsjava',       'javascripts'))// , true );
    console.log(scramble('javscripts',        'javascript' ))// , false);
    console.log(scramble('jscripts',          'javascript' ))// , false);
    console.log(scramble('aabbcamaomsccdd',   'commas'     ))// , true );
    console.log(scramble('commas',            'commas'     ))// , true );
    console.log(scramble('sammoc',            'commas'     ))// , true )
let s1 = "abcdefghijklmnopqrstuvwxyz".repeat(10_000);
let s2 = "zyxcba".repeat(9_000);
console.log(scramble(s1, s2)); */