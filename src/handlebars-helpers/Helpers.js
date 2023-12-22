class Helpers {
  static uppercaseFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static toCamelCase(str) {
    return str
      .replace(/[-_\s]+(\w|$)/g, (_, c) => (c ? c.toUpperCase() : ''))
      .replace(/^(\w)/, (_, c) => c.toLowerCase());
  }
}

module.exports = Helpers;
