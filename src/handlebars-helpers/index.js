const handlebars = require('handlebars');

const init = () => {
  handlebars.registerHelper('uppercaseFirstLetter', (str) => {
    const result = str.charAt(0).toUpperCase() + str.slice(1);

    return new handlebars.SafeString(result);
  });
};

module.exports = init;
