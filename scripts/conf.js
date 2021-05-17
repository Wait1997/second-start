const path = require('path')

const PROJECT_PATH = path.resolve(__dirname, '../')
/**
 * path.parse() 方法会返回一个对象，其属性表示 path 的有效元素
 * 返回的对象具有以下属性
 * dir root base name ext
 */
const PROJECT_NAME = path.parse(PROJECT_PATH).name

// dev server 路径与端口
const SERVER_HOST = 'localhost'
const SERVER_PORT = 9000

const shouldOpenAnalyzer = false
const ANALYZER_HOST = 'localhost'
const ANALYZER_PORT = '8888'

// 图片资源 limit
const imageInlineSizeLimit = 4 * 1024

module.exports = {
  PROJECT_PATH,
  PROJECT_NAME,
  SERVER_HOST,
  SERVER_PORT,
  shouldOpenAnalyzer,
  ANALYZER_HOST,
  ANALYZER_PORT,
  imageInlineSizeLimit
}
