#!/usr/bin/env node
const path = require('path');
const Handlebars = require('handlebars');

const Logger = require('./utils/Logger');
const FS = require('./utils/FS');
const Config = require('./utils/Config');
const { COMMANDS, TEMPLATES, TEMPLATES_ALIAS } = require('./constants');

const getReactTsComponentTemplate = require('./templates/react-ts-component');

const CUSTOM_TEMPLATES_DEFAULT_FOLDER = './src/custom-templates';

const writeFile = (cliPath, file, content) => {
  try {
    const folderPath = path.join(cliPath, file.folderPath ?? '');
    const filePath = path.join(folderPath, file.fileName);

    if (FS.isExist(filePath)) {
      Logger.warning(`File "${filePath}" already exists`);
      return;
    }

    if (!FS.isExist(folderPath)) {
      FS.createFolder(folderPath);
    }

    FS.createFile(filePath, content);
    Logger.success(`File "${filePath}" created successfully`);
  } catch (err) {
    Logger.error(err.message);
  }
};

const getComponentName = (path) => {
  const regex = /\/([^\/]*)$/;
  const result = path.match(regex);
  const string = result[1] ?? 'component';

  return string.charAt(0).toUpperCase() + string.slice(1);
};

const generateTemplate = (cliPath, name, template) => {
  try {
    // todo валидацию вынести отсюда
    if (!template?.files || !Array.isArray(template.files)) {
      throw new Error('You must specify the files field in the config file');
    }

    template.files.forEach((file) => {
      if (!file.template || typeof file.template !== 'string') {
        throw new Error('You must specify the template field in the config file');
      }

      if (!file.fileName || typeof file.fileName !== 'string') {
        throw new Error('You must specify the fileName field in the config file');
      }

      const templatePath = path.resolve(`${template.folder}/${file.template}`);
      const templateSource = FS.readFileSync(templatePath, 'utf8');

      const content = Handlebars.compile(templateSource)({ name });

      writeFile(cliPath, file, content);
    });
  } catch (err) {
    Logger.error(`Error generate custom templates: ${err.message}`);
  }
};

const getCustomTemplates = () => {
  const templates = {};

  try {
    const files = FS.readFilesInFolder(CUSTOM_TEMPLATES_DEFAULT_FOLDER);

    files.forEach((file) => {
      if (file.name === 'config.json') {
        const content = JSON.parse(file.content);

        if (content.alias) {
          templates[content.alias] = {
            folder: `${CUSTOM_TEMPLATES_DEFAULT_FOLDER}/${file.folder}`,
            ...content,
          };
        } else {
          throw new Error('You must specify the alias in the config file');
        }
      }
    });
  } catch (err) {
    Logger.error(`Error create custom templates: ${err.message}`);
  }

  return templates;
};

const main = () => {
  const args = process.argv.slice(2);
  const config = new Config();

  const command = args[0];
  const cliTemplate = args[1];
  const cliPath = args[2];

  if (!cliPath) {
    Logger.error('You must specify the path to the component');
  }

  const name = getComponentName(cliPath);

  if (command === COMMANDS.GENERATE_CUSTOM_TEMPLATE) {
    const templates = getCustomTemplates();
    const template = templates[cliTemplate];

    if (template) {
      generateTemplate(cliPath, name, template);
    } else {
      Logger.error('Unknown custom template');
    }

    return;
  }

  if (command === COMMANDS.GENERATE_DEFAULT_TEMPLATE) {
    switch (args[1]) {
      case TEMPLATES_ALIAS[TEMPLATES.REACT_TS_COMPONENTS]: {
        const options = config.getTemplateConfig(TEMPLATES.REACT_TS_COMPONENTS);
        const template = getReactTsComponentTemplate(options);
        generateTemplate(cliPath, name, template);

        break;
      }

      default:
        Logger.error('Unknown template');
    }
  }

  Logger.error('Unknown command');
};

main();
