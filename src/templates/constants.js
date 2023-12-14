const generateRCT = require('./react-component-ts');
const generateAFT = require('./arrow-function-ts');
const generateRHT = require('./react-hook-ts');

const TEMPLATES = {
  REACT_COMPONENTS_TS: 'react-component-ts',
  ARROW_FUNCTION_TS: 'arrow-function-ts',
  REACT_HOOK_TS: 'react-hook-ts',
};

const TEMPLATES_ALIAS = {
  [TEMPLATES.REACT_COMPONENTS_TS]: 'rct',
  [TEMPLATES.ARROW_FUNCTION_TS]: 'aft',
  [TEMPLATES.REACT_HOOK_TS]: 'rht',
};

const GENERATORS = {
  [[TEMPLATES_ALIAS[TEMPLATES.REACT_COMPONENTS_TS]]]: generateRCT,
  [[TEMPLATES_ALIAS[TEMPLATES.ARROW_FUNCTION_TS]]]: generateAFT,
  [[TEMPLATES_ALIAS[TEMPLATES.REACT_HOOK_TS]]]: generateRHT,
};

module.exports = {
  TEMPLATES,
  TEMPLATES_ALIAS,
  GENERATORS,
};
