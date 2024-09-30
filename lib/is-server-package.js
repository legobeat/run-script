import { stat } from 'node:fs/promises'
import { resolve } from 'node:path'

export default async path => {
  try {
    const st = await stat(resolve(path, 'server.js'))
    return st.isFile()
  } catch (er) {
    return false
  }
}
