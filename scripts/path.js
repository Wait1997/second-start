const path = require('path')
const fs = require('fs')

// process.cwd()返回的是当前Node.js进程执行时的工作目录
const appDirectory = fs.realpathSync(process.cwd)

function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath)
}

const moduleFileExtensions = ['ts', 'tsx', 'js', 'jsx']

function resolveModule(resolveFn, filePath) {
  const extension = moduleFileExtensions.find((ex) => fs.existsSync(resolveFn(`${filePath}.${ex}`)))

  if (extension) {
    return resolveFn(`${filePath}.${extension}`)
  }
  return resolveFn(`${filePath}.ts`)
}

module.exports = {
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  appIndex: resolveModule(resolveApp, 'src/index'), // 包入口
  appHtml: resolveApp('public/index.html'),
  appNodeModules: resolveApp('node_modules'), // node_modules 入口
  appSrc: resolveApp('src'),
  appSrcComponents: resolveApp('src/components'),
  appSrcUtils: resolveApp('src/utils'),
  appProxySetup: resolveModule(resolveApp, 'src/setProxy'),
  appPackageJson: resolveApp('package.json'),
  appTsConfig: resolveApp('tsconfig.json'),
  moduleFileExtensions
}
