/**
 * @file path
 * @author xiaozhihua
 * @date 2018-12-13 20:39:07
 */

import Path from 'path'

export default {
  JoinApp: (...arg) => {
    return Path.join(process.cwd(), ...arg)
  }
}
