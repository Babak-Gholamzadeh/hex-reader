const chalk = require('chalk');

function createRows(content) {
  const rows = [];
  for (let i = 0; i < content.length; i += 16) {
    let row = ` ${printRowNumber(i)} |  ${printHexBytes(content.slice(i, i + 16))}  | ${printCharBytes(content.slice(i, i + 16))}`;
    rows.push(row);
  }
  return rows.join('\n');
}

function printRowNumber(index) {
  return index.toString(16).padStart(8, '0');
}

function printHexBytes(content) {
  const sixteenBytes = [];
  for (let i = 0; i < 16; i += 4) {
    const fourBytes = [];
    for (let j = i; j < i + 4; j++) {
      let oneByte = '';
      if (j >= content.length) {
        oneByte = '  ';
      } else {
        const charCode = content[j];
        // Understandable range of characters
        if (charCode >= 32 && charCode <= 126) {
          oneByte = charCode.toString(16).padStart(2, '0');
        }
        // Distinguish TAB(09), LF(0A) and CR(0D) characters
        else if ([9, 10, 13].includes(charCode)) {
          oneByte = chalk.green(charCode.toString(16).padStart(2, '0'));
        }
        // The rest of the characters
        else {
          oneByte = chalk.red(charCode.toString(16).padStart(2, '0'));
        }
      }
      fourBytes.push(oneByte);
    }
    sixteenBytes.push(fourBytes.join(' '));
  }
  return sixteenBytes.join('  ');
}

function printCharBytes(content) {
  let result = '';
  content.forEach(function (byte) {
    // Understandable range of characters
    if (byte >= 32 && byte <= 126) {
      result += String.fromCharCode(byte);
    }
    // Distinguish TAB(09), LF(0A) and CR(0D) characters
    else if ([9, 10, 13].includes(byte)) {
      result += chalk.green('.');
    }
    // The rest of the characters
    else {
      result += chalk.red('.');
    }
  });
  return result.padEnd(16, ' ');
}

module.exports = createRows;