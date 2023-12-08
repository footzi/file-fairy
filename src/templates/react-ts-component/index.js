const path = require('path');
const FS = require('../../utils/FS');

const generate = (options) => {
  const configPath = path.resolve('./src/templates/react-ts-component/config.json');
  const template = JSON.parse(FS.readFileSync(configPath));

  const sortedFiles = template.files.filter((file) => {
    return !(file.template === 'styles.hbs' && !options.useCssModules);
  });

  return {
    ...template,
    files: sortedFiles,
    folder: './src/templates/react-ts-component',
  };
};

module.exports = generate;
