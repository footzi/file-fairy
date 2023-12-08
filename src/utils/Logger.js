class Logger {
  static error(message) {
    console.log(`❌   \x1b[31m${message}\x1b[0m`);
  }

  static success(message) {
    console.log(`🪄   \x1b[32m${message}\x1b[0m`);
  }

  static info(message) {
    console.log(`😽   \x1b[34m${message}\x1b[0m`);
  }

  static warning(message) {
    console.log(`⚠️   \x1b[33m${message}\x1b[0m`);
  }
}

module.exports = Logger;
