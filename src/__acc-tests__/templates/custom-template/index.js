const readExpectedTemplate = require('../../utils');

const TESTS = [
  {
    name: 'should write template without cli options',
    cli: ['', '', 'gc', 'rc', './components/CustomComponent'],
    folderName: 'components/CustomComponent',
    files: [
      {
        fileName: 'components/CustomComponent/CustomComponent.jsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
      {
        fileName: 'components/CustomComponent/styles.scss',
        content: readExpectedTemplate(__dirname, './__fixtures__/styles-default'),
      },
    ],
  },
  {
    name: 'should write template without cli options not camel case',
    cli: ['', '', 'gc', 'rc', './components/custom-component'],
    folderName: 'components/custom-component',
    files: [
      {
        fileName: 'components/custom-component/custom-component.jsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
      {
        fileName: 'components/custom-component/styles.scss',
        content: readExpectedTemplate(__dirname, './__fixtures__/styles-default'),
      },
    ],
  },
  {
    name: 'should write template with cli options',
    cli: ['', '', 'gc', 'rc', './components/CustomComponent', '--myVariable=FileFairy', '--isGood'],
    folderName: 'components/CustomComponent',
    files: [
      {
        fileName: 'components/CustomComponent/CustomComponent.jsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-vars'),
      },
      {
        fileName: 'components/CustomComponent/styles.scss',
        content: readExpectedTemplate(__dirname, './__fixtures__/styles-default'),
      },
    ],
  },
  {
    name: 'should write template with noGenerateKey option',
    cli: ['', '', 'gc', 'rc', './components/CustomComponent', '--nost'],
    folderName: 'components/CustomComponent',
    files: [
      {
        fileName: 'components/CustomComponent/CustomComponent.jsx',
        content: readExpectedTemplate(__dirname, './__fixtures__/component-default'),
      },
    ],
  },
];

module.exports = TESTS;
