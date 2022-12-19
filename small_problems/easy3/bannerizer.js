const MAX_LENGTH = 70;

function logInBox(string) {
  let longOne;
  if (string.length > MAX_LENGTH) longOne = MAX_LENGTH;
  let length = longOne || string.length;

  let template = [
    `+-${'-'.repeat(length)}-+`,
    `| ${' '.repeat(length)} |`,
    `| ${' '.repeat(length)} |`,
    `+-${'-'.repeat(length)}-+`
  ];

  if (length === MAX_LENGTH) {
    tooLong(string, template);
  } else {
    template.splice(2, 0, `| ${string} |`);
  }

  template.forEach(line => {
    console.log(line);
  });
}

function tooLong(string, template) {
  let newLine = string.split('');
  let insertIndex = 2;

  while (newLine.length >= MAX_LENGTH) {
    let cutoff = findWordCutOff(newLine);
    let padding = MAX_LENGTH - cutoff + 1;

    newLine.splice(cutoff, 1);
    template.splice(insertIndex, 0,
      `| ${newLine.splice(0, cutoff).join('')}${' '.repeat(padding)}|`);
    insertIndex += 1;
  }

  template.splice(insertIndex, 0,
    `| ${newLine.join('')}${' '.repeat(MAX_LENGTH - newLine.length)} |`);
}

function findWordCutOff(newLine) {
  let str = newLine.join('');
  let index = MAX_LENGTH;

  while (str[index] !== ' ') {
    index -= 1;
  }

  return index;
}

logInBox('To boldly go where no one has gone before. To boldly go where no one has gone before. To boldly go where no one has gone before. To boldly go where no one has gone before. To boldly go where no one has gone before. To boldly go where no one has gone before.');
// logs

// +------------------------------------------------------------------------+
// |                                                                        |
// | To boldly go where no one has gone before. To boldly go where no one   |
// | has gone before. To boldly go where no one has gone before. To boldly  |
// | go where no one has gone before. To boldly go where no one has gone    |
// | before. To boldly go where no one has gone before.                     |
// |                                                                        |
// +------------------------------------------------------------------------+
logInBox('To boldly go where no one has gone before.');
// logs

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+