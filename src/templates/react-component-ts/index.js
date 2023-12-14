const path = require('path');
const FS = require('../../utils/FS');

const generate = (options) => {
  const configPath = path.resolve(__dirname, 'config.json');
  const template = JSON.parse(FS.readFileSync(configPath));

  const sortedFiles = template.files.filter((file) => {
    return !(file.template === 'styles.hbs' && !options.useCssModules);
  });

  return {
    ...template,
    files: sortedFiles,
    folder: __dirname,
  };
};

module.exports = generate;
