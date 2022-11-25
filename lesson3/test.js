let title = "Flintstone Family Members";
let str = 'qweruiopqweruiopqweruioqwerpoiuqweprou';
let str2 = '12334'
let paddingtitle = Math.floor((40 - title.length)/2);
let paddingstr = Math.floor((40 - str.length)/2);
let paddingstr2 = Math.floor((40 - str2.length)/2);

console.log(title.padStart(paddingtitle + title.length));
console.log(str.padStart(paddingstr + str.length));
console.log(str2.padStart(paddingstr2 + str2.length));