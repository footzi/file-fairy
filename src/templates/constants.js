const generateRCT = require('./react-component-ts');
const generateAFT = require('./arrow-function-ts');
const generateRHT = require('./react-hook-ts');
const generateAF = require('./arrow-function');
const generateRC = require('./react-component');
const generateRH = require('./react-hook');

const TEMPLATES = {
  REACT_COMPONENTS_TS: 'react-component-ts',
  ARROW_FUNCTION_TS: 'arrow-function-ts',
  REACT_HOOK_TS: 'react-hook-ts',
  REACT_COMPONENTS: 'react-component',
  REACT_HOOK: 'react-hook',
  ARROW_FUNCTION: 'arrow-function',
};

const TEMPLATES_ALIAS = {
  rct: TEMPLATES.REACT_COMPONENTS_TS,
  aft: TEMPLATES.ARROW_FUNCTION_TS,
  rht: TEMPLATES.REACT_HOOK_TS,
  rc: TEMPLATES.REACT_COMPONENTS,
  rh: TEMPLATES.REACT_HOOK,
  af: TEMPLATES.ARROW_FUNCTION,
};

const GENERATORS = {
  [TEMPLATES.REACT_COMPONENTS_TS]: generateRCT,
  [TEMPLATES.ARROW_FUNCTION_TS]: generateAFT,
  [TEMPLATES.REACT_HOOK_TS]: generateRHT,
  [TEMPLATES.ARROW_FUNCTION]: generateAF,
  [TEMPLATES.REACT_COMPONENTS]: generateRC,
  [TEMPLATES.REACT_HOOK]: generateRH,
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
  [TEMPLATES.ARROW_FUNCTION]: [{ name: 'noTest', alias: 'notest' }],
  [TEMPLATES.REACT_COMPONENTS]: [
    { name: 'noStyle', alias: 'nost' },
    { name: 'noTest', alias: 'notest' },
  ],
  [TEMPLATES.REACT_HOOK]: [{ name: 'noTest', alias: 'notest' }],
};

module.exports = {
  TEMPLATES,
  TEMPLATES_ALIAS,
  GENERATORS,
  OPTIONS,
};
