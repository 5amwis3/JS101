function wordLengths(str) {
  if (!str) return [];

  return str.split(' ').map(word => `${word} ${word.length}`);
}