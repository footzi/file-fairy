const readExpectedTemplate = require('../../utils');

const TESTS = [
  {
    name: 'should write template without cli options',
    cli: ['', '', 'g', 'rc', './components/SomeComponent'],
    folderName: 'components/SomeComponent',
    files: [
      {
        fileName: 'components/SomeComponent/index.jsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
      {
        fileName: 'components/SomeComponent/__spec__/index.spec.jsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/test-default'),
      },
      {
        fileName: 'components/SomeComponent/index.css',
        content: readExpectedTemplate(__dirname, './__fixtures__/styles-default'),
      },
    ],
  },
  {
    name: 'should write template without cli options and not camel case',
    cli: ['', '', 'g', 'rc', './components/some-component'],
    folderName: 'components/some-component',
    files: [
      {
        fileName: 'components/some-component/index.jsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
      {
        fileName: 'components/some-component/__spec__/index.spec.jsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/test-default'),
      },
      {
        fileName: 'components/some-component/index.css',
        content: readExpectedTemplate(__dirname, './__fixtures__/styles-default'),
      },
    ],
  },
  {
    name: 'should write template with cli options',
    cli: ['', '', 'g', 'rc', './components/SomeComponent', '--nost', '--notest'],
    folderName: 'components/SomeComponent',
    files: [
      {
        fileName: 'components/SomeComponent/index.jsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-nostyle'),
      },
    ],
  },
  {
    name: 'should write template with file options',
    cli: ['', '', 'g', 'rc', './components/SomeComponent'],
    folderName: 'components/SomeComponent',
    configFile: {
      templates: {
        'react-component': {
          noStyle: true,
          noTest: true,
        },
      },
    },
    files: [
      {
        fileName: 'components/SomeComponent/index.jsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-nostyle'),
      },
    ],
  },
  {
    name: 'should write template with rewriteAlias option',
    cli: ['', '', 'g', 'myAlias', './components/SomeComponent'],
    folderName: 'components/SomeComponent',
    configFile: {
      templates: {
        'react-component': {
          noTest: true,
          noStyle: true,
          rewriteAlias: 'myAlias',
        },
      },
    },
    files: [
      {
        fileName: 'components/SomeComponent/index.jsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-nostyle'),
      },
    ],
  },
  {
    name: 'should write template with rewrite files, {{name}}, noGenerate options',
    cli: ['', '', 'g', 'rc', './components/SomeComponent'],
    folderName: 'components/SomeComponent',
    configFile: {
      templates: {
        'react-component': {
          rewriteFiles: [
            {
              template: 'component.hbs',
              fileName: '{{name}}.jsx',
            },
            {
              template: 'test.hbs',
              folderPath: '',
              fileName: 'index.test.jsx',
            },
            {
              template: 'styles.hbs',
              noGenerate: true,
            },
          ],
        },
      },
    },
    files: [
      {
        fileName: 'components/SomeComponent/SomeComponent.jsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
      {
        fileName: 'components/SomeComponent/index.test.jsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/test-default'),
      },
    ],
  },
];

module.exports = TESTS;
