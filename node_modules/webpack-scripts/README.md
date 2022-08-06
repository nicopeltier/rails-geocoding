# webpack-scripts

[![NPM version](https://img.shields.io/npm/v/webpack-scripts.svg?style=flat-square)](https://npmjs.com/package/webpack-scripts) [![NPM downloads](https://img.shields.io/npm/dm/webpack-scripts.svg?style=flat-square)](https://npmjs.com/package/webpack-scripts) [![Build Status](https://img.shields.io/circleci/project/egoist/webpack-scripts/master.svg?style=flat-square)](https://circleci.com/gh/egoist/webpack-scripts)

## Install

```bash
$ npm install --save webpack-scripts
```

## Usage

```js
const scripts = require('webpack-scripts')

// to build your app
scripts.build(webpackConfig)

// to run dev server for your app
script.start(webpackConfig, {
  port: 4000,
  hot: true
})
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT](https://egoist.mit-license.org/) © [EGOIST](https://github.com/egoist)
