const readExpectedTemplate = require('../../utils');

const TESTS = [
  {
    name: 'should write template without cli options',
    cli: ['', '', 'g', 'rh', './components/useSomeHook'],
    folderName: 'components/useSomeHook',
    files: [
      {
        fileName: 'components/useSomeHook/index.js',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
      {
        fileName: 'components/useSomeHook/__spec__/index.spec.js',
        content: readExpectedTemplate(__dirname, './__fixtures__/test-default'),
      },
    ],
  },
  {
    name: 'should write template without cli options not camel case',
    cli: ['', '', 'g', 'rh', './components/use-some-hook'],
    folderName: 'components/use-some-hook',
    files: [
      {
        fileName: 'components/use-some-hook/index.js',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
      {
        fileName: 'components/use-some-hook/__spec__/index.spec.js',
        content: readExpectedTemplate(__dirname, './__fixtures__/test-default'),
      },
    ],
  },
  {
    name: 'should write template with cli options',
    cli: ['', '', 'g', 'rh', './components/useSomeHook', '--notest'],
    folderName: 'components/useSomeHook',
    files: [
      {
        fileName: 'components/useSomeHook/index.js',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
    ],
  },
  {
    name: 'should write template with file options',
    cli: ['', '', 'g', 'rh', './components/useSomeHook'],
    folderName: 'components/useSomeHook',
    configFile: {
      templates: {
        'react-hook': {
          noTest: true,
        },
      },
    },
    files: [
      {
        fileName: 'components/useSomeHook/index.js',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
    ],
  },
  {
    name: 'should write template with rewriteAlias option',
    cli: ['', '', 'g', 'myAlias', './components/useSomeHook'],
    folderName: 'components/useSomeHook',
    configFile: {
      templates: {
        'react-hook': {
          noTest: true,
          rewriteAlias: 'myAlias',
        },
      },
    },
    files: [
      {
        fileName: 'components/useSomeHook/index.js',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
    ],
  },
  {
    name: 'should write template with rewrite files, {{name}}, noGenerate options',
    cli: ['', '', 'g', 'rh', './components/useSomeHook'],
    folderName: 'components/useSomeHook',
    configFile: {
      templates: {
        'react-hook': {
          rewriteFiles: [
            {
              template: 'hook.hbs',
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
        fileName: 'components/useSomeHook/useSomeHook.js',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
    ],
  },
];

module.exports = TESTS;
