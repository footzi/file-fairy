const path = require('path');
const FS = require('../utils/FS');

const readConfigFile = (dirname) => {
  const configPath = path.resolve(dirname, 'config.json');
  return JSON.parse(FS.readFileSync(configPath));
};

const rewriteFiles = (files, rewriteFiles) => {
  if (!rewriteFiles?.length) {
    return files;
  }

  return files.map((file) => {
    const rewriteFile = rewriteFiles.find((f) => f.template === file.template);

    return rewriteFile || file;
  });
};

module.exports = {
  readConfigFile,
  rewriteFiles,
};
