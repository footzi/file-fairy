const readExpectedTemplate = require('../../utils');

const TESTS = [
  {
    name: 'should write template without cli options',
    cli: ['', '', 'g', 'rct', './components/SomeComponent'],
    folderName: 'components/SomeComponent',
    files: [
      {
        fileName: 'components/SomeComponent/index.tsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
      {
        fileName: 'components/SomeComponent/__spec__/index.spec.tsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/test-default'),
      },
      {
        fileName: 'components/SomeComponent/index.css',
        content: readExpectedTemplate(__dirname, './__fixtures__/styles-default'),
      },
      {
        fileName: 'components/SomeComponent/types.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/types-default'),
      },
    ],
  },
  {
    name: 'should write template without cli options and not camel case',
    cli: ['', '', 'g', 'rct', './components/some-component'],
    folderName: 'components/some-component',
    files: [
      {
        fileName: 'components/some-component/index.tsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
      {
        fileName: 'components/some-component/__spec__/index.spec.tsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/test-default'),
      },
      {
        fileName: 'components/some-component/index.css',
        content: readExpectedTemplate(__dirname, './__fixtures__/styles-default'),
      },
      {
        fileName: 'components/some-component/types.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/types-default'),
      },
    ],
  },
  {
    name: 'should write template with cli options',
    cli: ['', '', 'g', 'rct', './components/SomeComponent', '--nost', '--notest', '--notypes'],
    folderName: 'components/SomeComponent',
    files: [
      {
        fileName: 'components/SomeComponent/index.tsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-nostyle'),
      },
    ],
  },
  {
    name: 'should write template with file options',
    cli: ['', '', 'g', 'rct', './components/SomeComponent'],
    folderName: 'components/SomeComponent',
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
        fileName: 'components/SomeComponent/index.tsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-with-types'),
      },
    ],
  },
  {
    name: 'should write template with useTypeAsKeyWord option',
    cli: ['', '', 'g', 'rct', './components/SomeComponent'],
    folderName: 'components/SomeComponent',
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
        fileName: 'components/SomeComponent/index.tsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-with-types-and-type-keyword'),
      },
    ],
  },
  {
    name: 'should write template with rewriteAlias option',
    cli: ['', '', 'g', 'myAlias', './components/SomeComponent'],
    folderName: 'components/SomeComponent',
    configFile: {
      templates: {
        'react-component-ts': {
          noTest: true,
          noTypes: true,
          noStyle: true,
          rewriteAlias: 'myAlias',
        },
      },
    },
    files: [
      {
        fileName: 'components/SomeComponent/index.tsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-nostyle'),
      },
    ],
  },
  {
    name: 'should write template with rewrite files, usePathName, noGenerate options',
    cli: ['', '', 'g', 'rct', './components/SomeComponent'],
    folderName: 'components/SomeComponent',
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
        fileName: 'components/SomeComponent/SomeComponent.tsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
      {
        fileName: 'components/SomeComponent/index.test.tsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/test-default'),
      },
    ],
  },
];

module.exports = TESTS;
