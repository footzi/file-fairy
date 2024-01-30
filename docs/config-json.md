# Describe `config.json` for template:

- `alias` - shortcut which you'll use in cli, e.g. `ff gc aft ./src/utils/getData`
- `files` - array with file templates
    - `template` - template name
    - `fileName` - file name
       - `{{name}}` - use can use this template to add file name
    - `folderPath` - if you want to create folder than add path to it
    - `noGenerateKey` - if you don't want to generate this file, add this key in as bool variable `ff gc aft ./src/utils/getData --nt`
    - `noGenerate` - never generate this file

```json
{
  "alias": "aft",
  "files": [
    {
      "template": "fn.hbs",
      "fileName": "index.ts"
    },
    {
      "template": "test.hbs",
      "folderPath": "__spec__",
      "fileName": "{{name}}.spec.ts",
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
