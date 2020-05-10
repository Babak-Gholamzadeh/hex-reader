const createColumnsName = require('./create-columns-name');
const createRows = require('./create-rows');

function prettyDisplay(content) {
  console.log(createColumnsName());
  console.log(createRows(content));
}

module.exports = prettyDisplay;
