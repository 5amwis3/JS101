// 30 min
/* For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times.

The input string consists of lowercase latin letters.

Your function should return :

a tuple (t, k) (in Python)
an array [t, k] (in Ruby and JavaScript)
in C, return k and write to the string t passed in parameter
Example #1:

for string

s = "ababab";
the answer is
["ab", 3]


Example #2:
for string

s = "abcde"
the answer is

["abcde", 1]
because for this string "abcde" the minimum substring t, such that s is t repeated k times, is itself. 



find min  = t
find max = k
so that s = t * k

input str
output str, num

find MIN pattern that repeats
find how many times it repeats 

if pattern x repeated z times === str, return [pattern, z]

s = "ababab";

0 = a
compare to
1 = b

0 - 2 = 'ab'
compare to
2 - 3 = 'ab'     yes this is smallest pattern that repeats

  'ab' repeats 0 , 1, 2, 3,  times to make 'ababab'

0 - 3 = 'aba'
3 - 6 = 'bab'    no

idx = 1
_____________
slice(0, idx) // a
slice(idx, (idx + 1)) // b

idx = 2
_____________
0 - 2 => slice(0, idx)   // 'ab' (0,1)
2 - 4 => (idx, idx + 2)       // 'ab' (2,3)

idx = 3
_____________
0 - 3 => slice(0, idx) //  'aba'
3 - 6 => slice(idx, idx + 3) 'bab' 




algo for repetition 
slice(0, idx) === slice(idx, idx * 2)

  if  slice(0, idx) repeats 0 , 1, 2, 3,  times to make 'ababab'

  return slice(0, idx), times to repeat
*/


let f = str => str.split('').map((_, idx) => str.slice(0, idx + 1)).reduce((result, sub) => sub.repeat(str.length / sub.length) === str && !result[0] ? [sub, str.length / sub.length] : result, 0);
//bad way

console.log(f("ababab"))// ["ab", 3]
console.log(f("abcde"))// ["abcde", 1]


