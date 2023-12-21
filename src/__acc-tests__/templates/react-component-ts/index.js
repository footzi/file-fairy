const readExpectedTemplate = require('../../utils');

const TESTS = [
  {
    name: 'should write template without cli options',
    cli: ['', '', 'g', 'rct', './components/Test'],
    folderName: 'components/Test',
    files: [
      {
        fileName: 'components/Test/index.tsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
      {
        fileName: 'components/Test/__spec__/index.spec.tsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/test-default'),
      },
      {
        fileName: 'components/Test/index.css',
        content: readExpectedTemplate(__dirname, './__fixtures__/styles-default'),
      },
      {
        fileName: 'components/Test/types.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/types-default'),
      },
    ],
  },
  {
    name: 'should write template with cli options',
    cli: ['', '', 'g', 'rct', './components/Test', '--nost', '--notest', '--notypes'],
    folderName: 'components/Test',
    files: [
      {
        fileName: 'components/Test/index.tsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-nostyle'),
      },
    ],
  },
  {
    name: 'should write template with file options',
    cli: ['', '', 'g', 'rct', './components/Test'],
    folderName: 'components/Test',
    configFile: {
      templates: {
        'react-component-ts': {
          noStyle: true,
          noTest: true,
          noTypes: true,
          useTypesInComponent: true,
        },
      },
    },
    files: [
      {
        fileName: 'components/Test/index.tsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-with-types'),
      },
    ],
  },
  {
    name: 'should write template with useTypeAsKeyWord option',
    cli: ['', '', 'g', 'rct', './components/Test'],
    folderName: 'components/Test',
    configFile: {
      templates: {
        'react-component-ts': {
          useTypesInComponent: true,
          useTypeAsKeyWord: true,
          noStyle: true,
          noTest: true,
        },
      },
    },
    files: [
      {
        fileName: 'components/Test/index.tsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-with-types-and-type-keyword'),
      },
    ],
  },
  {
    name: 'should write template with rewrite files, usePathName, noGenerate options',
    cli: ['', '', 'g', 'rct', './components/Test'],
    folderName: 'components/Test',
    configFile: {
      templates: {
        'react-component-ts': {
          rewriteFiles: [
            {
              template: 'component.hbs',
              fileName: 'index.tsx',
              usePathName: true,
            },
            {
              template: 'test.hbs',
              folderPath: '',
              fileName: 'index.test.tsx',
            },
            {
              template: 'styles.hbs',
              noGenerate: true,
            },
            {
              template: 'types.hbs',
              noGenerate: true,
            },
          ],
        },
      },
    },
    files: [
      {
        fileName: 'components/Test/Test.tsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
      {
        fileName: 'components/Test/index.test.tsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/test-default'),
      },
    ],
  },
];

module.exports = TESTS;
