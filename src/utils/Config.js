const path = require('path');
const FS = require('./FS');
const Logger = require('./Logger');
const { OPTIONS: TEMPLATE_OPTIONS } = require('../templates/constants');

class Config {
  static DEFAULT_CONFIG_PATH = '../default.config.json';
  static CUSTOM_CONFIG_FILE_NAME = 'ff.config.json';

  config = {};
  rootFolder = '';
  configPath = path.resolve(__dirname, Config.DEFAULT_CONFIG_PATH);

  init() {
    try {
      this.findRootFolder();

      const localConfig = JSON.parse(FS.readFileSync(path.resolve(__dirname, Config.DEFAULT_CONFIG_PATH)));

      const customConfigPath = path.resolve(this.rootFolder, Config.CUSTOM_CONFIG_FILE_NAME);
      const customConfig = FS.isExist(customConfigPath) ? JSON.parse(FS.readFileSync(customConfigPath)) : {};

      this.config = { ...localConfig, ...customConfig };
    } catch (err) {
      throw new Error(`Error init config: ${err.message}`);
    }
  }

  get() {
    return this.config;
  }

  getRootFolder() {
    return this.rootFolder;
  }

  getTemplateConfig(name, cliOptions) {
    const defaultOptions = this.config.templates && this.config.templates[name];
    const templateOptions = TEMPLATE_OPTIONS[name] ?? [];

    const optionsFromCli = Object.entries(cliOptions).reduce((acc, [key, value]) => {
      const option = templateOptions.find((o) => o.alias === key);

      if (option) {
        acc[option.name] = value;
      } else {
        throw new Error(`Unknown option ${key} for ${name} template`);
      }

      return acc;
    }, {});

    return { ...defaultOptions, ...optionsFromCli } ?? {};
  }

  writeOption(key, value) {
    try {
      const file = JSON.parse(FS.readFileSync(this.configPath));
      file[key] = value;

      const updatedJson = JSON.stringify(file, null, 2);

      FS.createFile(this.configPath, updatedJson);

      Logger.info(`The option ${key} was successfully written`);
    } catch (err) {
      throw new Error(`Error write option ${err.message}`);
    }
  }

  findRootFolder() {
    const maxDepth = 5;

    const find = (rootFileName) => {
      let currentDir = process.cwd();
      let depth = 0;

      while (currentDir !== '/' && depth < maxDepth) {
        const packageJsonPath = path.join(currentDir, rootFileName);

        if (FS.isExist(packageJsonPath)) {
          return currentDir;
        }

        currentDir = path.dirname(currentDir);
        depth++;
      }

      return null;
    };

    let root = find('package.json');

    if (!root) {
      root = find(Config.CUSTOM_CONFIG_FILE_NAME);

      if (!root) {
        throw new Error(
          `Root folder wasn't found. Add ${Config.CUSTOM_CONFIG_FILE_NAME} file in root folder in your project, or go to root folder`
        );
      }

      this.rootFolder = root;
    }

    this.rootFolder = root;
  }
}

const config = new Config();

module.exports = config;
