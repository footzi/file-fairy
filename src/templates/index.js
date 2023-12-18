const { GENERATORS } = require('./constants');

const CLI = require('../utils/CLI');
const config = require('../utils/Config');
const Template = require('../utils/Template');

const generateDefaultTemplate = () => {
  const cliTemplateAlias = CLI.getTemplate();
  const templateName = Template.getNameByAlias(cliTemplateAlias);
  const generator = GENERATORS[templateName];

  if (!generator) {
    throw new Error('Generator not found');
  }

  const cliPath = CLI.getPath();
  const name = CLI.getComponentName(cliPath);
  const cliOptionsTemplate = CLI.getParams();

  const options = config.getTemplateConfig(templateName, cliOptionsTemplate);
  const template = generator(options);

  Template.generateTemplate({
    cliPath,
    name,
    template,
    options,
  });
};

module.exports = generateDefaultTemplate;
