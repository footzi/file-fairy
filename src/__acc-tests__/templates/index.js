const RCT_TESTS = require('./react-component-ts');
const AFT_TESTS = require('./arrow-function-ts');
const RHT_TESTS = require('./react-hook-ts');
const CUSTOM_TESTS = require('./custom-template');
const AF_TESTS = require('./arrow-function');
const RC_TESTS = require('./react-component');
const RH_TESTS = require('./react-hook');

const TESTS = [
  {
    name: 'templates/react-component-ts',
    tests: RCT_TESTS,
  },
  {
    name: 'templates/arrow-function-ts',
    tests: AFT_TESTS,
  },
  {
    name: 'templates/react-hook-ts',
    tests: RHT_TESTS,
  },
  {
    name: 'templates/custom-template',
    tests: CUSTOM_TESTS,
  },
  {
    name: 'templates/arrow-function',
    tests: AF_TESTS,
  },
  {
    name: 'templates/react-component',
    tests: RC_TESTS,
  },
  {
    name: 'templates/react-hook',
    tests: RH_TESTS,
  },
];

module.exports = TESTS;
