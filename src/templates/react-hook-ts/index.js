const path = require('path');
const FS = require('../../utils/FS');

const generate = () => {
  const configPath = path.resolve(__dirname, 'config.json');
  const template = JSON.parse(FS.readFileSync(configPath));

  return {
    ...template,
    files: template.files,
    folder: __dirname,
  };
};

module.exports = generate;
