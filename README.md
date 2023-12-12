# 😽🪄 File Fairy

## Install

1. Run `npm install file-fairy -D` in your project
2. Create your custom-templates in `.ff-templates` folder in your project

If you don't want to install the package in your local project, you can install it globally:

`npm install file-fairy -g`

And then configure it from cli:
- set folder for your custom-templates `ff set --custom-templates-folder=/{path to folder}`

## Commands
1. `ff g {alias} {path}` - generate default template
2. `ff gc {alias} {path}` - generate your custom template
3. `ff set {key=value}` - set options
4. `ff v` - show version

## Options
1. `ff set --custom-templates-folder='/{path to folder}'` - set folder for your custom-templates

## Default templates
1. React typescript component - `ff g rtc {path}`

## Creating your custom templates

Template engine documentation: [handlebars](https://handlebarsjs.com/)
