# 😽🪄 File Fairy

**If you're tired of constantly creating the same files and folders, this package will save you time!**

**Use default templates with options or create your own**


## Install
You have several options:
1. Install in your project
   - Run `npm install file-fairy -D`
   - Add `ff.config.json` in the root folder, if you want to customize the package
2. Global install
   - Run `npm install file-fairy -g`
   - Add `ff.config.json` in the root folder, if you want to customize the package
3. Installation in a project with a non-frontend stack
   - Be sure that you are using [node.js](https://nodejs.org/en/download) higher than 16 version
   - Run `npm install file-fairy -g`
   - Be sure to add `ff.config.json` in the root folder

## Using default templates
Use `ff g {alias} {path} --{options}` for generate default template, where
- `alias` - a name of template
- `path` - path to the creating file
- `options` - for this template

E.g:
`ff g rct ./src/components/SomeComponent --nost` - Will create react typescript component without style file

Read more about options for templates in their pages:

- [React Typescript component](https://github.com/footzi/file-fairy/blob/main/docs/templates/react-component-ts.md) `ff g rct ./src/components/SomeComponent`
- [React Typescript hook](https://github.com/footzi/file-fairy/blob/main/docs/templates/react-hook-ts.md) `ff g rht ./src/components/useSomeHook`
- [Arrow Typescript function](https://github.com/footzi/file-fairy/blob/main/docs/templates/arrow-function-ts.md) `ff g aft ./src/components/someFunction`
- [React component](https://github.com/footzi/file-fairy/blob/main/docs/templates/react-component.md) `ff g rc ./src/components/SomeComponent`
- [React hook](https://github.com/footzi/file-fairy/blob/main/docs/templates/react-hook.md) `ff g rh ./src/components/useSomeHook`
- [Arrow function](https://github.com/footzi/file-fairy/blob/main/docs/templates/arrow-function.md) `ff g af ./src/components/someFunction`

## Creating custom templates
You can create your templates in `.ff-templates` folder in your project

#### You should take the following steps:
1. Create new folder (a folder name is doesn't matter)
2. Add templates using [handlebars](https://handlebarsjs.com/)
3. Add `config.json` file with [contract](https://github.com/footzi/file-fairy/blob/main/docs/config-json.md)

#### We can use the next helpers in template:
1. `uppercaseFirstLetter` - capitalizes the first letter
2. `toCamelCase` - transform text to camel case
3. `name` - this name of your file from cli command. E.g. `ff gc my-temp ./src/MyCustomComponent` **name** will be equal `MyCustomComponent`
4. `vars` - this object with your variables from cli command. E.g `ff gc my-temp ./src/Test --myVar=hello --skipTest` **vars** will be equal 
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
- `templates` (and then `default-component-name`) - set options for default templates, they'll apply to every generate. Read about options on [templates-page](https://github.com/footzi/file-fairy/blob/main/docs/DEFAULT-TEMPLATES.md)

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
