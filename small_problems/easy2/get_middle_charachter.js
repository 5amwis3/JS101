function centerOf(str) {
  let half = str.length / 2;
  
  if (str.length % 2 === 0) {
    console.log(str.substring(half - 1, half + 1));
  } else {
    console.log(str[Math.floor(half)]);
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"