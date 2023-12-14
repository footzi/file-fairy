const generateRTC = require('./react-ts-component');
const generateAFT = require('./arrow-function-ts');

const TEMPLATES = {
  REACT_TS_COMPONENTS: 'react-ts-component',
  ARROW_FUNCTION_TS: 'arrow-function-ts',
};

const TEMPLATES_ALIAS = {
  [TEMPLATES.REACT_TS_COMPONENTS]: 'rtc',
  [TEMPLATES.ARROW_FUNCTION_TS]: 'aft',
};

const GENERATORS = {
  [[TEMPLATES_ALIAS[TEMPLATES.REACT_TS_COMPONENTS]]]: generateRTC,
  [[TEMPLATES_ALIAS[TEMPLATES.ARROW_FUNCTION_TS]]]: generateAFT,
};

module.exports = {
  TEMPLATES,
  TEMPLATES_ALIAS,
  GENERATORS,
};
