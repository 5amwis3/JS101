function letterCaseCount(str) {
  let obj = { lowercase: 0, uppercase : 0, neither : 0 };
  
  str.split('').forEach(letter => {
    if (letter.toUpperCase() === letter.toLowerCase()) {
      obj.neither += 1;
    } else if (letter === letter.toUpperCase()) {
      obj.uppercase +=1;
    } else {
      obj.lowercase +=1;
    }
  })
  console.log(obj);
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }