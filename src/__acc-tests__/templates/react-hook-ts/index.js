const readExpectedTemplate = require('../../utils');

const TESTS = [
  {
    name: 'should write template without cli options',
    cli: ['', '', 'g', 'rht', './components/useGetData'],
    folderName: 'components/useGetData',
    files: [
      {
        fileName: 'components/useGetData/index.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
      {
        fileName: 'components/useGetData/__spec__/index.spec.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/test-default'),
      },
      {
        fileName: 'components/useGetData/types.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/types-default'),
      },
    ],
  },
  {
    name: 'should write template with cli options',
    cli: ['', '', 'g', 'rht', './components/useGetData', '--notest', '--notypes'],
    folderName: 'components/useGetData',
    files: [
      {
        fileName: 'components/useGetData/index.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
    ],
  },
  {
    name: 'should write template with file options',
    cli: ['', '', 'g', 'rht', './components/useGetData'],
    folderName: 'components/useGetData',
    configFile: {
      templates: {
        'react-hook-ts': {
          noTest: true,
          noTypes: true,
          useTypesInComponent: true,
        },
      },
    },
    files: [
      {
        fileName: 'components/useGetData/index.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-with-types'),
      },
    ],
  },
  {
    name: 'should write template with useTypeAsKeyWord option',
    cli: ['', '', 'g', 'rht', './components/useGetData'],
    folderName: 'components/useGetData',
    configFile: {
      templates: {
        'react-hook-ts': {
          useTypesInComponent: true,
          useTypeAsKeyWord: true,
          noTest: true,
        },
      },
    },
    files: [
      {
        fileName: 'components/useGetData/index.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-with-types-and-type-keyword'),
      },
    ],
  },
  {
    name: 'should write template with rewrite files, usePathName, noGenerate options',
    cli: ['', '', 'g', 'rht', './components/useGetData'],
    folderName: 'components/useGetData',
    configFile: {
      templates: {
        'react-hook-ts': {
          rewriteFiles: [
            {
              template: 'hook.hbs',
              fileName: 'index.ts',
              usePathName: true,
            },
            {
              template: 'test.hbs',
              folderPath: '',
              fileName: 'index.test.ts',
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
        fileName: 'components/useGetData/useGetData.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
      {
        fileName: 'components/useGetData/index.test.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/test-default'),
      },
    ],
  },
];

module.exports = TESTS;
