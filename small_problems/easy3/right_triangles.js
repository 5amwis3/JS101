function triangle(spaces) {
  let stars = 0;
  while (spaces >= 0) {
    console.log(' '.repeat(spaces) + '*'.repeat(stars));
    spaces -= 1;
    stars += 1;
  }
}
triangle(5);
triangle(10);
triangle(20);
triangle(400);

