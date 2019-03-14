'use strict'
const Generator = require('yeoman-generator')
const chalk = require('chalk') // eslint-disable-line
const path = require('path')

module.exports = class extends Generator {
  async prompting() {
    const anwsers = await this.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: "Input the project's name",
        default: this.appname
      },
      {
        type: 'input',
        name: 'author',
        messge: 'author',
        default: '',
        store: true
      }
    ])

    this.projectName = anwsers.projectName
    this.author = anwsers.author
    this.projectPath = path.join('./', this.projectName)
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(__dirname),
      this.destinationPath(this.projectPath),
      {
        projectName: this.projectName,
        author: this.author
      },
      {},
      {
        globOptions: {
          dot: true
        }
      }
    )
  }

  install() {
    this.installDependencies(
      {
        bower: false,
        npm: true,
        yarn: true
      },
      {
        cwd: this.destinationRoot(this.projectPath)
      }
    )
  }

  end() {
    this.log(
      `
      ${chalk.green('generator project Success')}
      ${chalk.green('cd ' + this.projectPath + ' & npm start')}
      `
    )
  }
}
