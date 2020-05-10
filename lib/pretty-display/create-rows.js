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
        oneByte = content[j].toString(16).padStart(2, '0');
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
    if ([10, 13].includes(byte)) {
      result += '.';
    } else {
      result += String.fromCharCode(byte);
    }
  });
  return result.padEnd(16, ' ');
}

module.exports = createRows;