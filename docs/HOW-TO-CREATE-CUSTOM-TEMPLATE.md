# How to create your custom template?

You can create templates in `.ff-templates` folder in your project, or using any folder in your OS, call this command `ff set --custom-templates-folder='/{path to folder}`

1. Create new folder
2. Add templates using [handlebars](https://handlebarsjs.com/)
3. Add `config.json` file, where
 - `alias` - shortcut which you'll use in cli, e.g. `ff gc aft ./src/utils/getData` 
 - `files` - array with file templates
    - `template` - template name
    - `fileName` - file name
    - `folderPath` - if you want to create folder than add path to it

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
      "fileName": "index.spec.ts"
    },
    {
      "template": "types.hbs",
      "fileName": "types.ts"
    }
  ]
}
```

See [default templates](https://github.com/footzi/file-fairy/blob/docs/HOW-TO-CREATE-CUSTOM-TEMPLATE.md) for example
