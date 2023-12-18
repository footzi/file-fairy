const { readConfigFile, rewriteFiles } = require('../utils');

const generate = (options) => {
  const template = readConfigFile(__dirname);
  const rewrittenFiles = rewriteFiles(template.files, options.rewriteFiles);

  const files = rewrittenFiles.reduce((acc, file) => {
    const isSkipFile =
      file.noGenerate ||
      (options.noTest && file.template === 'test.hbs') ||
      (options.noTypes && file.template === 'types.hbs') ||
      (options.useTypesInComponent && file.template === 'types.hbs');

    if (!isSkipFile) {
      acc.push(file);
    }

    return acc;
  }, []);

  return {
    ...template,
    files,
    folder: __dirname,
  };
};

module.exports = generate;
