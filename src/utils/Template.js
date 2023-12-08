const FS = require('./FS');
const Logger = require('./Logger');
const path = require('path');
const Handlebars = require('handlebars');

class Template {
  static getCustomTemplates() {
    try {
      const templates = {};
      const customTemplateFolder = Template.getCustomTemplatesFolder();

      const filesInTemplateFolder = FS.readFilesInFolder(customTemplateFolder);

      filesInTemplateFolder.forEach((file) => {
        if (file.name === 'config.json') {
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
      throw new Error(`Error create custom templates: ${err.message}`);
    }
  }

  static generateTemplate(cliPath, name, template) {
    try {
      Template.validateTemplateFormat(template);

      template.files.forEach((file) => {
        Template.validateTemplateFileFormat(file);

        const pathToTemplate = path.resolve(`${template.folder}/${file.template}`);
        const templateSource = FS.readFileSync(pathToTemplate, 'utf8');

        const content = Handlebars.compile(templateSource)({ name });

        Template.writeTemplate(cliPath, file, content);
      });
    } catch (err) {
      throw new Error(`Error generate custom templates: ${err.message}`);
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

    return isDev
      ? path.resolve(__dirname, '../../custom-templates')
      : path.resolve(__dirname, '../../../../ff-templates');
  }
}

module.exports = Template;
