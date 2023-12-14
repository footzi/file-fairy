class CLI {
  static getArgs() {
    return process.argv.slice(2);
  }

  static getCommand() {
    const args = CLI.getArgs();
    const command = args[0];

    if (!command) {
      throw new Error('You must specify the command to file-fairy');
    }

    return command;
  }

  static getTemplate() {
    const args = CLI.getArgs();
    const template = args[1];

    if (!template) {
      throw new Error('You must specify the template of the component');
    }

    return template;
  }

  static getPath() {
    const args = CLI.getArgs();
    const template = args[2];

    if (!template) {
      throw new Error('You must specify the path to the component');
    }

    return template;
  }

  static getComponentName(path) {
    try {
      const regex = /\/([^/]*)$/;
      const result = path.match(regex);

      return result[1] ?? 'component';
    } catch (err) {
      throw new Error('Error getting component name');
    }
  }

  static getParams() {
    const args = CLI.getArgs();
    const params = {};

    args.forEach((arg) => {
      const [key, value] = arg.split('=');

      if (key.startsWith('--')) {
        const paramName = key.slice(2);
        params[paramName] = value || true;
      }
    });

    return params;
  }
}

module.exports = CLI;
