const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const paths = require('../path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  target: 'web',
  output: {
    filename: 'js/[name].js',
    path: paths.appBuild
  },
  devServer: {
    compress: true,
    stats: 'errors-only',
    clientLogLevel: 'silent',
    open: true,
    hot: true,
    noInfo: true
  }
})
