const fs = require('fs').promises;
const prettyDisplay = require('./lib/pretty-display');
(async file => {
  const content = await fs.readFile(file);

  prettyDisplay(content);

})(process.argv[2]);

