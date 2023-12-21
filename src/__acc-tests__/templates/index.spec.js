const fs = require('fs');
const TESTS = require('./index');

const main = require('../../main');
const config = require('../../utils/Config');

const mockCreateFolderSync = jest.fn();
const mockWriteFileSync = jest.fn();

jest.spyOn(fs, 'mkdirSync').mockImplementation(mockCreateFolderSync);
jest.spyOn(fs, 'writeFileSync').mockImplementation(mockWriteFileSync);

jest.spyOn(config, 'init').mockImplementation(jest.fn());

TESTS.forEach((template) => {
  describe(template.name, () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    template.tests.forEach((item) => {
      it(item.name, () => {
        process.argv = item.cli;

        if (item.configFile) {
          config.config = item.configFile;
        }

        main();

        item.files.forEach((file, index) => {
          expect(mockWriteFileSync).toHaveBeenNthCalledWith(index + 1, file.fileName, file.content);
        });

        expect(mockWriteFileSync).toHaveBeenCalledTimes(item.files.length);
        expect(mockCreateFolderSync).toHaveBeenNthCalledWith(1, item.folderName, expect.anything());
      });
    });
  });
});
