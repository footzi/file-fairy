# Describe `config.json` for template:

- `alias` - shortcut which you'll use in cli, e.g. `ff gc aft ./src/utils/getData`
- `files` - array with file templates
    - `template` - template name
    - `fileName` - file name
    - `folderPath` - if you want to create folder than add path to it
    - `noGenerateKey` - if you don't want to generate this file, add this key in as bool variable `ff gc aft ./src/utils/getData --nt`
    - `usePathName` - if you want that file to have a name as a folder in your cli path
    - `noGenerate` - never generate this file

```json
{
  "alias": "aft",
  "files": [
    {
      "template": "fn.hbs",
      "fileName": "index.ts",
      "usePathName": true
    },
    {
      "template": "test.hbs",
      "folderPath": "__spec__",
      "fileName": "index.spec.ts",
      "noGenerate": true
    },
    {
      "template": "types.hbs",
      "fileName": "types.ts", 
      "noGenerateKey": "nt"
    }
  ]
}
```
