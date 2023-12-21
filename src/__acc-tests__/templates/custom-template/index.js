const readExpectedTemplate = require('../../utils');

const TESTS = [
  {
    name: 'should write template without cli options',
    cli: ['', '', 'gc', 'rc', './components/Test'],
    folderName: 'components/Test',
    files: [
      {
        fileName: 'components/Test/Test.jsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
      {
        fileName: 'components/Test/styles.scss',
        content: readExpectedTemplate(__dirname, './__fixtures__/styles-default'),
      },
    ],
  },
  {
    name: 'should write template with cli options',
    cli: ['', '', 'gc', 'rc', './components/Test', '--myVariable=FileFairy', '--isGood'],
    folderName: 'components/Test',
    files: [
      {
        fileName: 'components/Test/Test.jsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-vars'),
      },
      {
        fileName: 'components/Test/styles.scss',
        content: readExpectedTemplate(__dirname, './__fixtures__/styles-default'),
      },
    ],
  },
  {
    name: 'should write template with noGenerateKey option',
    cli: ['', '', 'gc', 'rc', './components/Test', '--nost'],
    folderName: 'components/Test',
    files: [
      {
        fileName: 'components/Test/Test.jsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
    ],
  },
];

module.exports = TESTS;
