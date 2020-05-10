const fs = require('fs').promises;

(async file => {
  const content = await fs.readFile(file);
  console.log('content:', content);
})(process.argv[2]);