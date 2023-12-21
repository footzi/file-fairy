const fs = require('fs');
const path = require('path');

const readExpectedTemplate = (dirname, templatePath) => {
  return fs.readFileSync(path.resolve(dirname, templatePath), 'utf-8');
};

module.exports = readExpectedTemplate;
