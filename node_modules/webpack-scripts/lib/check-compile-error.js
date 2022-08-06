'use strict'
const chalk = require('chalk')

module.exports = (stats, options) => {
  if (stats.hasErrors()) {
    process.exitCode = 1
    console.error(chalk.red('\nCompilation failed!\n'))
  } else {
    console.log(chalk.green('\nCompiled successfully!\n'))
    if (options.type === 'start') {
      console.log(`Your app is running at http://localhost:${options.port}\n`)
    }
  }
}
