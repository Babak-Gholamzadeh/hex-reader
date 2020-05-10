#!/usr/bin/env node

const fs = require('fs').promises;
const prettyDisplay = require('./lib/pretty-display');

(async file => {
  try {

    const fileStat = await fs.lstat(file);
    if(fileStat.isFile()) {
      const content = await fs.readFile(file);
      prettyDisplay(content);
    } else {
      throw new Error('The input is not a file');
    }

  } catch(err) {

    if(file) {
      const content = Buffer.from(file);
      prettyDisplay(content);
    } else {
      let content = Buffer.from('');
      process.stdin.on('data', function(chunk) {
        content = Buffer.concat([content, chunk]);
      });
      process.stdin.on('end', function() {
        prettyDisplay(content);
      });
    }

  }

})(process.argv[2]);

