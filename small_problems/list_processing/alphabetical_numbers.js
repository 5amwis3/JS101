let words = [
  'zero', 'one', 'two', 'three', 'four',
  'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
  'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
]

function alphabeticNumberSort(arr) {
  console.log([...arr].sort((a, b) => {
    if (words[a] > words[b]) {
      return 1;
    } else if (words[a] < words[b]) {
      return -1;
    } else {
      return 0;
    }
  }));
}

alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 16, 8, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]