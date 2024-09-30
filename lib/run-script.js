import PackageJson from '@npmcli/package-json'
import runScriptPkg from './run-script-pkg.js'
import validateOptions from './validate-options.js'
import isServerPackage from './is-server-package.js'

const runScript = async options => {
  validateOptions(options)
  if (options.pkg) {
    return runScriptPkg(options)
  }
  const { content: pkg } = await PackageJson.normalize(options.path)
  return runScriptPkg({ ...options, pkg })
}

export default Object.assign(runScript, { isServerPackage })
