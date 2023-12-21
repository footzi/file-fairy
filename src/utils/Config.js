const path = require('path');
const FS = require('./FS');
const Logger = require('./Logger');
const { OPTIONS: TEMPLATE_OPTIONS } = require('../templates/constants');

class Config {
  static DEFAULT_CONFIG_PATH = '../default.config.json';
  static CUSTOM_CONFIG_FILE_NAME = '../../../../ff.config.json';

  config = {};
  configPath = path.resolve(__dirname, Config.DEFAULT_CONFIG_PATH);

  init() {
    try {
      const localConfig = JSON.parse(FS.readFileSync(path.resolve(__dirname, Config.DEFAULT_CONFIG_PATH)));

      const customConfigPath = path.resolve(__dirname, Config.CUSTOM_CONFIG_FILE_NAME);
      const customConfig = FS.isExist(customConfigPath) ? JSON.parse(FS.readFileSync(customConfigPath)) : {};

      this.config = { ...localConfig, ...customConfig };
    } catch (err) {
      throw new Error(`Error init config: ${err.message}`);
    }
  }

  get() {
    return this.config;
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
}

const config = new Config();

module.exports = config;
