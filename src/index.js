#!/usr/bin/env node
const Logger = require('./utils/Logger');
const CLI = require('./utils/CLI');
const Config = require('./utils/Config');
const Template = require('./utils/Template');

const { COMMANDS, TEMPLATES, TEMPLATES_ALIAS } = require('./constants');

const getReactTsComponentTemplate = require('./templates/react-ts-component');

const init = () => {
  const config = new Config();

  const command = CLI.getCommand();
  const cliTemplate = CLI.getTemplate();
  const cliPath = CLI.getPath();

  const name = CLI.getComponentName(cliPath);

  if (command === COMMANDS.GENERATE_CUSTOM_TEMPLATE) {
    const templates = Template.getCustomTemplates();
    const template = templates[cliTemplate];

    if (template) {
      Template.generateTemplate(cliPath, name, template);
    } else {
      throw new Error('Unknown custom template');
    }

    return;
  }

  if (command === COMMANDS.GENERATE_DEFAULT_TEMPLATE) {
    switch (cliTemplate) {
      case TEMPLATES_ALIAS[TEMPLATES.REACT_TS_COMPONENTS]: {
        const options = config.getTemplateConfig(TEMPLATES.REACT_TS_COMPONENTS);
        const template = getReactTsComponentTemplate(options);
        Template.generateTemplate(cliPath, name, template);

        break;
      }

      default:
        throw new Error('Unknown template');
    }

    return;
  }

  throw new Error('Unknown command');
};

const main = () => {
  try {
    init();
  } catch (err) {
    Logger.error(err.message);
  }
};

main();
