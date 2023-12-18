const generateRCT = require('./react-component-ts');
const generateAFT = require('./arrow-function-ts');
const generateRHT = require('./react-hook-ts');

const TEMPLATES = {
  REACT_COMPONENTS_TS: 'react-component-ts',
  ARROW_FUNCTION_TS: 'arrow-function-ts',
  REACT_HOOK_TS: 'react-hook-ts',
};

const TEMPLATES_ALIAS = {
  rct: TEMPLATES.REACT_COMPONENTS_TS,
  aft: TEMPLATES.ARROW_FUNCTION_TS,
  rht: TEMPLATES.REACT_HOOK_TS,
};

const GENERATORS = {
  [TEMPLATES.REACT_COMPONENTS_TS]: generateRCT,
  [TEMPLATES.ARROW_FUNCTION_TS]: generateAFT,
  [TEMPLATES.REACT_HOOK_TS]: generateRHT,
};

const OPTIONS = {
  [TEMPLATES.REACT_COMPONENTS_TS]: [
    { name: 'noStyle', alias: 'nost' },
    { name: 'noTest', alias: 'notest' },
    { name: 'noTypes', alias: 'notypes' },
    { name: 'useTypesInComponent' },
  ],
  [TEMPLATES.REACT_HOOK_TS]: [
    { name: 'noTest', alias: 'notest' },
    { name: 'noTypes', alias: 'notypes' },
    { name: 'useTypesInComponent' },
  ],
  [TEMPLATES.ARROW_FUNCTION_TS]: [
    { name: 'noTest', alias: 'notest' },
    { name: 'noTypes', alias: 'notypes' },
    { name: 'useTypesInComponent' },
  ],
};

module.exports = {
  TEMPLATES,
  TEMPLATES_ALIAS,
  GENERATORS,
  OPTIONS,
};
