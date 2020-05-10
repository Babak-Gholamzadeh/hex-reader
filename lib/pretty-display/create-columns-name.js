function createColumnsName() {
  let rowNames = `\t  |  `;
  // For Hex columns
  for (let i = 0; i < 16; i++) {
    rowNames += i.toString(16).padStart(2, '0') + ' ';
    if (i % 4 === 3) {
      rowNames += ' ';
    }
  }
  // For character columns
  rowNames += '| ';
  for (let i = 0; i < 16; i++) {
    rowNames += i.toString(16);
  }
  // For printing a line
  rowNames += `\n${`-`.repeat(10)}|${`-`.repeat(54)}|${`-`.repeat(17)} `;

  return rowNames;
}

module.exports = createColumnsName