const handlebars = require('handlebars');
const Helpers = require('./Helpers');

const init = () => {
  handlebars.registerHelper('toCamelCase', (str) => {
    return Helpers.toCamelCase(str);
  });

  handlebars.registerHelper('uppercaseFirstLetter', (str) => {
    return Helpers.uppercaseFirstLetter(str);
  });
};

module.exports = init;
