let flintonstnes = "The Flintstones Rock!";

for (let index = 0; index < 10; ++index) {
  console.log(flintonstnes.padStart(index + flintonstnes.length));
}

//for (let padding = 1; padding <= 10; padding++) {
//  console.log(" ".repeat(padding) + "The Flinstones Rock!");
//}