const COMMANDS = {
  GENERATE_DEFAULT_TEMPLATE: 'g',
  GENERATE_CUSTOM_TEMPLATE: 'gc',
  SET_OPTIONS: 'set',
};

const TEMPLATES = {
  REACT_TS_COMPONENTS: 'react-ts-component',
};

const TEMPLATES_ALIAS = {
  [TEMPLATES.REACT_TS_COMPONENTS]: 'rtc',
};

const OPTIONS = {
  CUSTOM_TEMPLATES_FOLDER: 'custom-templates-folder',
};

const OPTIONS_ALIAS = {
  [OPTIONS.CUSTOM_TEMPLATES_FOLDER]: 'custom-templates-folder',
};

module.exports = {
  COMMANDS,
  TEMPLATES,
  TEMPLATES_ALIAS,
  OPTIONS,
  OPTIONS_ALIAS,
};
