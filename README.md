# 😽🪄 File Fairy

**If you're tired of constantly creating the same files and folders, or you are creating too much boilerplate code, this package will save you time!**

**You can use default templates with options or create your own.**


## Install
You have several options:
1. Install in your project
   - run `npm install file-fairy -D`
   - add `ff.config.json` in the root folder of your project, if you want to customize the package
2. Global install
   - run `npm install file-fairy -g`
   - add `ff.config.json` in the root folder of your project, if you want to customize the package
3. Installation in a project with a non-frontend stack
   - be sure that you are using [node.js](https://nodejs.org/en/download) higher than 16 version
   - run `npm install file-fairy -g`
   - be sure to add `ff.config.json` in the root folder of your project

## Using default templates
Use this command in the terminal: `ff g {alias} {path} --{options}` for generate default template, where
- `alias` - a name of template
- `path` - path to the creating file
- `options` - options for this template

E.g.:
`ff g rct ./src/components/SomeComponent --nost` - Will create react typescript component without style file

Read more about options for templates on their pages:

- [React Typescript component](https://github.com/footzi/file-fairy/blob/main/docs/templates/react-component-ts.md) `ff g rct ./src/components/SomeComponent`
- [React Typescript hook](https://github.com/footzi/file-fairy/blob/main/docs/templates/react-hook-ts.md) `ff g rht ./src/components/useSomeHook`
- [Arrow Typescript function](https://github.com/footzi/file-fairy/blob/main/docs/templates/arrow-function-ts.md) `ff g aft ./src/components/someFunction`
- [React component](https://github.com/footzi/file-fairy/blob/main/docs/templates/react-component.md) `ff g rc ./src/components/SomeComponent`
- [React hook](https://github.com/footzi/file-fairy/blob/main/docs/templates/react-hook.md) `ff g rh ./src/components/useSomeHook`
- [Arrow function](https://github.com/footzi/file-fairy/blob/main/docs/templates/arrow-function.md) `ff g af ./src/components/someFunction`

## Creating custom templates

1. Create `.ff-templates` folder in your project (or with your name, [see config file options](#config-file-options))
2. Create a new folder for template (a folder name doesn't matter)
3. Add templates using [handlebars](https://handlebarsjs.com/)
4. Add `config.json` file with [contract](https://github.com/footzi/file-fairy/blob/main/docs/config-json.md)
5. Use `ff gc {alias} {path} --{options}` for generate your template, where
   - `alias` - your shortcut from [config-json](https://github.com/footzi/file-fairy/blob/main/docs/config-json.md)
   - `path` - path to the creating file
   - `options` - options for this template
     
E.g.:
`ff gc my-temp ./src/Test --myVar=hello --skipTest` - Will create your template with options


#### We can use the next helpers in template:
1. `uppercaseFirstLetter` - makes the first letter uppercase
2. `lowercaseFirstLetter` - makes the first letter lowercase
3 `toCamelCase` - transform text to camel case
4 `name` - this name of your file from cli command. E.g. `ff gc my-temp ./src/MyCustomComponent` **name** will be equal `MyCustomComponent`
5 `vars` - this object with your options from cli command. E.g. `ff gc my-temp ./src/Test --myVar=hello --skipTest` **vars** will be equal 
    ```json
    {
      "myVar": "hello",
      "skipTest": true
    }
    ```
   We can use your variables for options in templates.

See [full custom template example](https://github.com/footzi/file-fairy/tree/main/custom-template-examples/react-component)


## Config file options
You can create `ff.config.json` with following options:
- `custom-templates-folder` - set another folder with your custom templates (instead of `.ff-templates`)
- `templates` (and then `component-name`) - set options for default templates, they'll apply to every generate. Read more on [the doc page for each template](https://github.com/footzi/file-fairy/blob/main/docs/templates)

```json
  {
   "custom-templates-folder": "my-template-folder",
   "templates": {
      "react-ts-component": {
         "rewriteFiles": [],
         "useTypesInComponent": true
      }
   }
}
```

## CLI commands
- `ff g {alias} {path} --{options}` - generate default template with options
- `ff gc {alias} {path}` - generate your custom template
  - `ff gc {alias} {path} --KEY=VALUE` - generate template with your variables, they'll be added to the templates
- `ff version or -v` - show version


-------
If you have any questions or suggestions, text me on [linkedin](https://www.linkedin.com/in/vsmanakov)
