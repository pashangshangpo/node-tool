/**
 * @file path
 * @author xiaozhihua
 * @date 2018-12-13 20:39:07
 */

import Path from 'path'
import Fs from 'fs'

export default {
  joinApp(...arg) {
    return Path.join(process.cwd(), ...arg)
  },
  exists(path) {
    return new Promise(resolve => {
      Fs.stat(path, err => {
        resolve(err == null)
      })
    })
  }
}
