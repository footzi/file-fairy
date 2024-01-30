const readExpectedTemplate = require('../../utils');

const TESTS = [
  {
    name: 'should write template without cli options',
    cli: ['', '', 'g', 'af', './components/some-function'],
    folderName: 'components/some-function',
    files: [
      {
        fileName: 'components/some-function/index.js',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
      {
        fileName: 'components/some-function/__spec__/index.spec.js',
        content: readExpectedTemplate(__dirname, './__fixtures__/test-default'),
      },
    ],
  },
  {
    name: 'should write template with cli options',
    cli: ['', '', 'g', 'af', './components/some-function', '--notest'],
    folderName: 'components/some-function',
    files: [
      {
        fileName: 'components/some-function/index.js',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
    ],
  },
  {
    name: 'should write template with file options',
    cli: ['', '', 'g', 'af', './components/some-function'],
    folderName: 'components/some-function',
    configFile: {
      templates: {
        'arrow-function': {
          noTest: true,
        },
      },
    },
    files: [
      {
        fileName: 'components/some-function/index.js',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
    ],
  },
  {
    name: 'should write template with rewriteAlias option',
    cli: ['', '', 'g', 'myAlias', './components/some-function'],
    folderName: 'components/some-function',
    configFile: {
      templates: {
        'arrow-function': {
          noTest: true,
          rewriteAlias: 'myAlias',
        },
      },
    },
    files: [
      {
        fileName: 'components/some-function/index.js',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
    ],
  },
  {
    name: 'should write template with rewrite files, {{name}}, noGenerate options',
    cli: ['', '', 'g', 'af', './components/some-function'],
    folderName: 'components/some-function',
    configFile: {
      templates: {
        'arrow-function': {
          rewriteFiles: [
            {
              template: 'fn.hbs',
              fileName: '{{name}}.js',
            },
            {
              template: 'test.hbs',
              folderPath: '',
              fileName: 'index.test.js',
              noGenerate: true,
            },
          ],
        },
      },
    },
    files: [
      {
        fileName: 'components/some-function/some-function.js',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
    ],
  },
];

module.exports = TESTS;
