const fs = require('fs');
const path = require('path');

class FS {
  static isExist(path) {
    return fs.existsSync(path);
  }

  static createFolder(path) {
    try {
      fs.mkdirSync(path, { recursive: true });
    } catch (err) {
      throw new Error(`Error creating directory: "${path}", ${err.message}`);
    }
  }

  static createFile(path, content) {
    fs.writeFile(path, content, (err) => {
      if (err) {
        throw new Error(`Error creating file: "${path}", ${err.message}`);
      }
    });
  }

  static readFileSync(path) {
    return fs.readFileSync(path, 'utf8');
  }

  static readFilesInFolder(folderPath) {
    const result = [];
    let folderName = '';

    const readFiles = (folderPath) => {
      try {
        const files = fs.readdirSync(folderPath, { withFileTypes: true });

        files.forEach((file) => {
          const filePath = path.join(folderPath, file.name);

          if (file.isDirectory()) {
            folderName = file.name;

            readFiles(filePath);
          } else {
            const content = fs.readFileSync(filePath, 'utf-8');

            result.push({ name: file.name, content, folder: folderName });
          }
        });

        return result;
      } catch (err) {
        throw new Error(`Error reading directory: "${folderPath}", ${err.message}`);
      }
    };

    readFiles(folderPath);
    return result;
  }
}

module.exports = FS;
