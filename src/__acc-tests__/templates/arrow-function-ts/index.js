const readExpectedTemplate = require('../../utils');

const TESTS = [
  {
    name: 'should write template without cli options',
    cli: ['', '', 'g', 'aft', './components/calc'],
    folderName: 'components/calc',
    files: [
      {
        fileName: 'components/calc/index.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
      {
        fileName: 'components/calc/__spec__/index.spec.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/test-default'),
      },
      {
        fileName: 'components/calc/types.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/types-default'),
      },
    ],
  },
  {
    name: 'should write template with cli options',
    cli: ['', '', 'g', 'aft', './components/calc', '--notest', '--notypes'],
    folderName: 'components/calc',
    files: [
      {
        fileName: 'components/calc/index.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
    ],
  },
  {
    name: 'should write template with file options',
    cli: ['', '', 'g', 'aft', './components/calc'],
    folderName: 'components/calc',
    configFile: {
      templates: {
        'arrow-function-ts': {
          noTest: true,
          noTypes: true,
          useTypesInComponent: true,
        },
      },
    },
    files: [
      {
        fileName: 'components/calc/index.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-with-types'),
      },
    ],
  },
  {
    name: 'should write template with useTypeAsKeyWord option',
    cli: ['', '', 'g', 'aft', './components/calc'],
    folderName: 'components/calc',
    configFile: {
      templates: {
        'arrow-function-ts': {
          useTypesInComponent: true,
          useTypeAsKeyWord: true,
          noTest: true,
        },
      },
    },
    files: [
      {
        fileName: 'components/calc/index.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-with-types-and-type-keyword'),
      },
    ],
  },
  {
    name: 'should write template with rewriteAlias option',
    cli: ['', '', 'g', 'myAlias', './components/calc'],
    folderName: 'components/calc',
    configFile: {
      templates: {
        'arrow-function-ts': {
          noTest: true,
          noTypes: true,
          rewriteAlias: 'myAlias',
        },
      },
    },
    files: [
      {
        fileName: 'components/calc/index.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
    ],
  },
  {
    name: 'should write template with rewrite files, usePathName, noGenerate options',
    cli: ['', '', 'g', 'aft', './components/calc'],
    folderName: 'components/calc',
    configFile: {
      templates: {
        'arrow-function-ts': {
          rewriteFiles: [
            {
              template: 'fn.hbs',
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
        fileName: 'components/calc/calc.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
      {
        fileName: 'components/calc/index.test.ts',
        content: readExpectedTemplate(__dirname, './__fixtures__/test-default'),
      },
    ],
  },
];

module.exports = TESTS;
