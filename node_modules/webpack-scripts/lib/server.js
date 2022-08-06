'use strict'
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const addEntry = require('webpack-add-entry')
const checkCompileError = require('./check-compile-error')

module.exports = (webpackConfig, options) => {
  const app = express()

  const port = options.port

  webpackConfig.output.publicPath = '/'
  if (options.hot) {
    webpackConfig.entry = addEntry(webpackConfig.entry, require.resolve('webpack-hot-middleware/client'), {
      key: 'hmr'
    })
    webpackConfig.plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    )
  }

  const compiler = webpack(webpackConfig)

  const devMiddleWare = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: options.stats
  })
  app.use(devMiddleWare)
  if (options.hot) {
    app.use(require('webpack-hot-middleware')(compiler))
  }

  const mfs = devMiddleWare.fileSystem
  const file = path.join(webpackConfig.output.path, 'index.html')

  devMiddleWare.waitUntilValid(stats => {
    checkCompileError(stats, options)
  })

  app.get('*', (req, res) => {
    devMiddleWare.waitUntilValid(() => {
      const html = mfs.readFileSync(file)
      res.end(html)
    })
  })

  app.listen(port)
}
