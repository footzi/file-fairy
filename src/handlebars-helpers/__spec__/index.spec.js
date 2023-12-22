const Helpers = require('../Helpers');

describe('handlebars-helpers', () => {
  describe('uppercaseFirstLetter', () => {
    it('uppercaseFirstLetter', () => {
      expect(Helpers.uppercaseFirstLetter('test')).toBe('Test');
      expect(Helpers.uppercaseFirstLetter('test test')).toBe('Test test');
      expect(Helpers.uppercaseFirstLetter('testTest')).toBe('TestTest');
    });

    it('toCamelCase', () => {
      expect(Helpers.toCamelCase('some-component')).toBe('someComponent');
      expect(Helpers.toCamelCase('Some-Component')).toBe('someComponent');
      expect(Helpers.toCamelCase('some-Component')).toBe('someComponent');
      expect(Helpers.toCamelCase('SomeComponent')).toBe('someComponent');
      expect(Helpers.toCamelCase('some component')).toBe('someComponent');
      expect(Helpers.toCamelCase('Some Component')).toBe('someComponent');
      expect(Helpers.toCamelCase('Some component')).toBe('someComponent');
      expect(Helpers.toCamelCase('some Component')).toBe('someComponent');
    });
  });
});
