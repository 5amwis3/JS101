// 5 min
/* Complete the solution so that it returns the number of times the search_text is found within the full_text.

Usage example: 

inputs: str, str
output num

iterate through str
  get search str length
  search for that str length and compare it to search
  if there is a match + 1 to result

return result



*/

function solution(str, search) {
  let length = search.length;
  let result = 0;

  for(let idx = 0; idx < str.length; idx++) {
    if(str.slice(idx, idx + length) === search) {
      result += 1;
    }
  }

return result;
}

solution('aa_bb_cc_dd_bb_e', 'bb') // should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') // should return 1