const path = require('path');
const Handlebars = require('handlebars');

const FS = require('./FS');
const Logger = require('./Logger');
const config = require('./Config');
const { OPTIONS } = require('../constants');
const { TEMPLATES_ALIAS } = require('../templates/constants');

class Template {
  static CONFIG_FILE_NAME = 'config.json';
  static DEFAULT_CUSTOM_TEMPLATES_FOLDER = '.ff-templates';
  static DEV_CUSTOM_TEMPLATES_FOLDER = '../../custom-template-examples'; // from dev

  static getCustomTemplates() {
    try {
      const templates = {};
      const customTemplateFolder = Template.getCustomTemplatesFolder();

      const filesInTemplateFolder = FS.readFilesInFolder(customTemplateFolder);

      filesInTemplateFolder.forEach((file) => {
        if (file.name === Template.CONFIG_FILE_NAME) {
          const content = JSON.parse(file.content);

          if (content.alias) {
            templates[content.alias] = {
              folder: `${customTemplateFolder}/${file.folder}`,
              ...content,
            };
          } else {
            throw new Error('You must specify the alias in the config file');
          }
        }
      });

      return templates;
    } catch (err) {
      throw new Error(`Error read custom templates: ${err.message}`);
    }
  }

  static generateTemplate({ cliPath, name, template, options, variables = {} }) {
    try {
      Template.validateTemplateFormat(template);

      template.files.forEach((file) => {
        const noGenerateKey = file.noGenerateKey;

        if (variables[noGenerateKey]) {
          return;
        }

        if (file.usePathName) {
          file.fileName = file.fileName.replace(/^[^.]+/, name);
        }

        Template.validateTemplateFileFormat(file);

        const pathToTemplate = path.resolve(`${template.folder}/${file.template}`);
        const templateSource = FS.readFileSync(pathToTemplate, 'utf8');

        const content = Handlebars.compile(templateSource)({ name, vars: variables, options });

        Template.writeTemplate(cliPath, file, content);
      });
    } catch (err) {
      throw new Error(`Error generate template: ${err.message}`);
    }
  }

  static writeTemplate(cliPath, file, content) {
    try {
      const folderTargetPath = path.join(cliPath, file.folderPath ?? '');
      const fileTargetPath = path.join(folderTargetPath, file.fileName);

      if (FS.isExist(fileTargetPath)) {
        Logger.warning(`File "${fileTargetPath}" already exists`);
        return;
      }

      if (!FS.isExist(folderTargetPath)) {
        FS.createFolder(folderTargetPath);
      }

      FS.createFile(fileTargetPath, content);
      Logger.success(`File "${fileTargetPath}" created successfully`);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  static validateTemplateFormat(template) {
    if (!template?.alias || typeof template.alias !== 'string') {
      throw new Error('You must specify the alias field in the config file');
    }

    if (!template?.files || !Array.isArray(template.files)) {
      throw new Error('You must specify the files field in the config file');
    }
  }

  static validateTemplateFileFormat(file) {
    if (!file.template || typeof file.template !== 'string') {
      throw new Error('You must specify the template field in the config file');
    }

    if (!file.fileName || typeof file.fileName !== 'string') {
      throw new Error('You must specify the fileName field in the config file');
    }
  }

  static getCustomTemplatesFolder() {
    const isDev = process.env.FF_NODE_ENV === 'dev';
    const isTest = process.env.FF_NODE_ENV === 'test';
    const conf = config.get();
    const rootFolder = config.getRootFolder();

    const prodPath = conf[OPTIONS.CUSTOM_TEMPLATES_FOLDER]
      ? path.resolve(rootFolder, conf[OPTIONS.CUSTOM_TEMPLATES_FOLDER])
      : path.resolve(rootFolder, Template.DEFAULT_CUSTOM_TEMPLATES_FOLDER);

    return isDev || isTest ? path.resolve(__dirname, Template.DEV_CUSTOM_TEMPLATES_FOLDER) : prodPath;
  }

  static getNameByAlias(alias) {
    const configTemplates = config.get().templates ?? {};
    let rewrittenAlias = '';

    Object.entries(configTemplates).forEach(([key, options]) => {
      if (options.rewriteAlias) {
        rewrittenAlias = key;
      }
    });

    const name = rewrittenAlias || TEMPLATES_ALIAS[alias];

    if (!name) {
      throw new Error(`Unknown template alias: ${alias}`);
    }
    return name;
  }
}

module.exports = Template;
