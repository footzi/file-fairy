const readExpectedTemplate = require('../../utils');

const TESTS = [
  {
    name: 'should write template without cli options',
    cli: ['', '', 'g', 'rht', './components/useSomeHook'],
    folderName: 'components/useSomeHook',
    files: [
      {
        fileName: 'components/useSomeHook/index.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
      {
        fileName: 'components/useSomeHook/__spec__/index.spec.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/test-default'),
      },
      {
        fileName: 'components/useSomeHook/types.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/types-default'),
      },
    ],
  },
  {
    name: 'should write template without cli options not camel case',
    cli: ['', '', 'g', 'rht', './components/use-some-hook'],
    folderName: 'components/use-some-hook',
    files: [
      {
        fileName: 'components/use-some-hook/index.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
      {
        fileName: 'components/use-some-hook/__spec__/index.spec.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/test-default'),
      },
      {
        fileName: 'components/use-some-hook/types.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/types-default'),
      },
    ],
  },
  {
    name: 'should write template with cli options',
    cli: ['', '', 'g', 'rht', './components/useSomeHook', '--notest', '--notypes'],
    folderName: 'components/useSomeHook',
    files: [
      {
        fileName: 'components/useSomeHook/index.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
    ],
  },
  {
    name: 'should write template with file options',
    cli: ['', '', 'g', 'rht', './components/useSomeHook'],
    folderName: 'components/useSomeHook',
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
        fileName: 'components/useSomeHook/index.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-with-types'),
      },
    ],
  },
  {
    name: 'should write template with useTypeAsKeyWord option',
    cli: ['', '', 'g', 'rht', './components/useSomeHook'],
    folderName: 'components/useSomeHook',
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
        fileName: 'components/useSomeHook/index.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-with-types-and-type-keyword'),
      },
    ],
  },
  {
    name: 'should write template with rewriteAlias option',
    cli: ['', '', 'g', 'myAlias', './components/useSomeHook'],
    folderName: 'components/useSomeHook',
    configFile: {
      templates: {
        'react-hook-ts': {
          noTest: true,
          noTypes: true,
          rewriteAlias: 'myAlias',
        },
      },
    },
    files: [
      {
        fileName: 'components/useSomeHook/index.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
    ],
  },
  {
    name: 'should write template with rewrite files, usePathName, noGenerate options',
    cli: ['', '', 'g', 'rht', './components/useSomeHook'],
    folderName: 'components/useSomeHook',
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
        fileName: 'components/useSomeHook/useSomeHook.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
      {
        fileName: 'components/useSomeHook/index.test.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/test-default'),
      },
    ],
  },
];

module.exports = TESTS;
