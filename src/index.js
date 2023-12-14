#!/usr/bin/env node
const Logger = require('./utils/Logger');
const CLI = require('./utils/CLI');
const config = require('./utils/Config');
const Template = require('./utils/Template');
const Common = require('./utils/Common');

const { COMMANDS, OPTIONS_ALIAS } = require('./constants');

const generateDefaultTemplate = require('./templates/index');
const handleBarsHelpersInit = require('./handlebars-helpers/');

const init = () => {
  const command = CLI.getCommand();
  handleBarsHelpersInit();

  if (command === COMMANDS.GENERATE_CUSTOM_TEMPLATE) {
    const cliTemplate = CLI.getTemplate();
    const cliPath = CLI.getPath();
    const name = CLI.getComponentName(cliPath);

    const templates = Template.getCustomTemplates(config.get());
    const template = templates[cliTemplate];

    if (template) {
      Template.generateTemplate(cliPath, name, template);
    } else {
      throw new Error('Unknown custom template');
    }

    return;
  }

  if (command === COMMANDS.GENERATE_DEFAULT_TEMPLATE) {
    generateDefaultTemplate();
    return;
  }

  if (command === COMMANDS.SET_OPTIONS) {
    const options = CLI.getParams();

    Object.entries(options).forEach(([key, value]) => {
      const isExist = key in OPTIONS_ALIAS;

      if (isExist) {
        config.writeOption(key, value);
      } else {
        throw new Error('Unknown option for set');
      }
    });

    return;
  }

  if (command === COMMANDS.VERSION || command === COMMANDS.VERSION_SHORT) {
    const version = Common.getVersion();

    Logger.info(`The current version of file-fairy is ${version}`);

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
