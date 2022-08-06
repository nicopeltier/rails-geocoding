const webpack = require('webpack')
const server = require('./server')
const checkCompileError = require('./check-compile-error')

function scripts(webpackConfig, options) {
  options = Object.assign({
    stats: {
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    },
    port: 4000
  }, options)

  if (typeof options.type !== 'string') {
    throw new TypeError('Expecte type to be a string')
  }

  const compiler = webpack(webpackConfig)
  if (options.type === 'build') {
    compiler.run((err, stats) => {
      if (err) console.log(err)
      console.log(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }))
      checkCompileError(stats, options)
    })
  } else if (options.type === 'start') {
    server(webpackConfig, options)
  }
}

['build', 'start'].forEach(type => {
  scripts[type] = (webpackConfig, options) => {
    scripts(webpackConfig, Object.assign({type}, options))
  }
})

module.exports = scripts
