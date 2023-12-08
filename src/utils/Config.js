const path = require('path');
const FS = require('./FS');
const Logger = require('./Logger');

class Config {
  constructor() {
    this.config = {};

    this.set();
  }

  set() {
    try {
      const defaultConfigPath = path.resolve('./src/default.config.json');

      // @todo get loca config and merge
      this.config = JSON.parse(FS.readFileSync(defaultConfigPath));
    } catch (err) {
      Logger.error(`Error set config ${err.message}`);
    }
  }

  getTemplateConfig(name) {
    const template = this.config.templates && this.config.templates[name];

    return template ?? {};
  }
}

module.exports = Config;
