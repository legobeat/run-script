/* This file is automatically added by @npmcli/template-oss. Do not edit. */

'use strict'

import { readdirSync } from 'fs'

const localConfigs = readdirSync(__dirname)
  .filter((file) => file.startsWith('.eslintrc.local.'))
  .map((file) => `./${file}`)

module.exports = {
  root: true,
  ignorePatterns: [
    'tap-testdir*/',
  ],
  extends: [
    '@npmcli',
    ...localConfigs,
  ],
}
