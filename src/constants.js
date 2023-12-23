const COMMANDS = {
  GENERATE_DEFAULT_TEMPLATE: 'g',
  GENERATE_CUSTOM_TEMPLATE: 'gc',
  VERSION: 'version',
  VERSION_SHORT: '-v',
};

const OPTIONS = {
  CUSTOM_TEMPLATES_FOLDER: 'custom-templates-folder',
};

const OPTIONS_ALIAS = {
  [OPTIONS.CUSTOM_TEMPLATES_FOLDER]: 'custom-templates-folder',
};

module.exports = {
  COMMANDS,
  OPTIONS,
  OPTIONS_ALIAS,
};
