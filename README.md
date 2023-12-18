# 😽🪄 File Fairy

## Install

1. Run `npm install file-fairy -D` in your project
2. Create your custom-templates in `.ff-templates` folder in your project ([docs](./docs/HOW-TO-CREATE-CUSTOM-TEMPLATE.md))
3. Or use default templates ([docs](https://github.com/footzi/file-fairy/blob/main/docs/DEFAULT-TEMPLATES.md))

If you don't want to install the package in your local project, you can install it globally:

`npm install file-fairy -g`

And then configure it from cli `ff set --custom-templates-folder=/{path to folder}`

## Commands
- `ff g {alias} {path}` - generate default template - read about HERE
- `ff gc {alias} {path}` - generate your custom template - READ
    - `ff gc {alias} {path} --KEY=VALUE` - generate template with your variables, they'll be added to the templates
- `ff set {key=value}` - set options
- `ff version or -v` - show version

## Config file options 
Read about `ff.config.json` [here](https://github.com/footzi/file-fairy/blob/main/docs/DEFAULT-TEMPLATES.md)

## Default templates
The following templates are currently supported:
- React Typescript component `ff g rct ./src/components/Test`
- React Typescript hook `ff g rht ./src/hooks/useTest`
- Typescript arrow function `ff g aft ./src/utils/getTest`

Read about them and their options [here](https://github.com/footzi/file-fairy/blob/main/docs/DEFAULT-TEMPLATES.md)

## Custom templates
You can create your templates in `.ff-templates` folder in your project, or using any folder in your OS (call this command `ff set --custom-templates-folder='/{path to folder}`)

You should take the following steps:
1. Create new folder (a folder name is doesn't matter)
2. Add templates using [handlebars](https://handlebarsjs.com/)
3. Add `config.json` file with [contract](https://github.com/footzi/file-fairy/blob/main/docs/CONFIG-JSON.md)

You can use your variables in templates, they'll be added to there, e.g:
`ff gc my-temp ./src/componentsTest --name=hello --skipTest`

See [here](https://github.com/footzi/file-fairy/tree/main/src/custom-template-examples) for an example

## CLI options
- `ff set --custom-templates-folder='/{path to folder}'` - set folder for your custom-templates

## Config file options
You can create `ff.config.json` with following options:
- `templates` (and then `default-component-name`) - set options for default templates, they'll apply to every generate. Read about options on [templates-page](https://github.com/footzi/file-fairy/blob/main/docs/DEFAULT-TEMPLATES.md)

For example:
```json
  {
   "templates": {
      "react-ts-component": {
         "rewriteFiles": [],
         "useTypesInComponent": true
      }
   }
}
```
