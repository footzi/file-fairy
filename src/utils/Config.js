const path = require('path');
const FS = require('./FS');

class Config {
  constructor() {
    this.config = {};
    this.configPath = path.resolve(__dirname, '../config.json');

    this.set();
  }

  set() {
    try {
      this.config = JSON.parse(FS.readFileSync(this.configPath));
    } catch (err) {
      throw new Error(`Error set config ${err.message}`);
    }
  }

  get() {
    return this.config;
  }

  getTemplateConfig(name) {
    const template = this.config.templates && this.config.templates[name];

    return template ?? {};
  }

  writeOption(key, value) {
    try {
      const file = JSON.parse(FS.readFileSync(this.configPath));
      file[key] = value;

      const updatedJson = JSON.stringify(file, null, 2);

      FS.createFile(this.configPath, updatedJson);
    } catch (err) {
      throw new Error(`Error write option ${err.message}`);
    }
  }
}

const config = new Config();

module.exports = config;
