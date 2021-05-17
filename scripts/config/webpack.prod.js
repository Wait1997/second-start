const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const common = require('./webpack.common.js')
const paths = require('../path')

module.exports = merge(common, {
  mode: 'isProduction',
  devtool: false,
  target: 'browserslist',
  output: {
    filename: 'js/[name].[contenthash:8].js',
    path: paths.appBuild,
    assetModuleFilename: 'images/[name].[contenthash:8].[ext]'
  },
  plugins: [new CleanWebpackPlugin()].filter(Boolean)
})
