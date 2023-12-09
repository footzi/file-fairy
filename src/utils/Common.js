const path = require('path');
const FS = require('./FS');

class Common {
  static getVersion() {
    try {
      const filePath = path.resolve(__dirname, '../../package.json');
      const packageJson = JSON.parse(FS.readFileSync(filePath));

      return packageJson.version;
    } catch (err) {
      throw new Error(`Error get version: ${err.message}`);
    }
  }
}

module.exports = Common;
