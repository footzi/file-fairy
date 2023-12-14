const { TEMPLATES, GENERATORS } = require('./constants');

const CLI = require('../utils/CLI');
const config = require('../utils/Config');
const Template = require('../utils/Template');

const generateDefaultTemplate = () => {
  const cliTemplate = CLI.getTemplate();
  const generator = GENERATORS[cliTemplate];

  if (!generator) {
    throw new Error('Generator or template not found');
  }

  const cliPath = CLI.getPath();
  const name = CLI.getComponentName(cliPath);

  const options = config.getTemplateConfig(TEMPLATES.REACT_TS_COMPONENTS);
  const generatedTemplate = generator(options);
  Template.generateTemplate(cliPath, name, generatedTemplate);
};

module.exports = generateDefaultTemplate;
