const fs = require('fs').promises;

(async file => {
  const content = await fs.readFile(file);

  console.log('content:', content);
})(process.argv[2]);

function display(content) {
  printColumnsName();
  printRecords(content);
}

function printColumnsName() {
  let rowNames = '\t\t';
  // For Hex columns
  for(let i = 0; i < 16; i++) {
    rowNames += i.toString(16).padStart(2, '0') + ' ';
    if(i % 4 === 3) {
      rowNames += ' '.repeat(2);
    } 
  }
  // For character columns
  rowNames += '\t';
  for(let i = 0; i < 16; i++) {
    rowNames += i.toString(16);
  }
  return rowNames;
}
