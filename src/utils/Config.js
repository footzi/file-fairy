const path = require('path');
const FS = require('./FS');

class Config {
  constructor() {
    this.config = {};

    this.set();
  }

  set() {
    try {
      const defaultConfigPath = path.resolve(__dirname, '../default.config.json');

      // @todo get loca config and merge
      this.config = JSON.parse(FS.readFileSync(defaultConfigPath));
    } catch (err) {
      throw new Error(`Error set config ${err.message}`);
    }
  }

  getTemplateConfig(name) {
    const template = this.config.templates && this.config.templates[name];

    return template ?? {};
  }
}

module.exports = Config;
