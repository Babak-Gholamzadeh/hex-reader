const fs = require('fs').promises;
const prettyDisplay = require('./lib/pretty-display');
(async file => {
  let content = '';
  try {
    const fileStat = await fs.lstat(file);
    if(fileStat.isFile()) {
      content = await fs.readFile(file);
    }
  } catch(err) {
    content = Buffer.from(file);
  }

  prettyDisplay(content);

})(process.argv[2]);

