# 😽🪄 File Fairy

## Install

1. Run `npm install file-fairy -D` in your project
2. Create your custom-templates in `.ff-templates` folder in your project ([docs](./docs/HOW-TO-CREATE-CUSTOM-TEMPLATE.md))
3. Or use default templates ([docs](https://github.com/footzi/file-fairy/blob/main/docs/DEFAULT-TEMPLATES.md))

If you don't want to install the package in your local project, you can install it globally:

`npm install file-fairy -g`

And then configure it from cli `ff set --custom-templates-folder=/{path to folder}`

## Commands
1. `ff g {alias} {path}` - generate default template
2. `ff gc {alias} {path}` - generate your custom template
    - `ff gc {alias} {path} --v KEY=VALUE` - generate with your variables
3. `ff set {key=value}` - set options
4. `ff version or -v` - show version

## Options
1. `ff set --custom-templates-folder='/{path to folder}'` - set folder for your custom-templates

## Default templates
Read more about them [here](https://github.com/footzi/file-fairy/blob/main/docs/DEFAULT-TEMPLATES.md)

## Creating your custom templates
How to create your custom template, read [here](https://github.com/footzi/file-fairy/blob/main/docs/HOW-TO-CREATE-CUSTOM-TEMPLATE.md)

Template engine documentation: [handlebars](https://handlebarsjs.com/)
