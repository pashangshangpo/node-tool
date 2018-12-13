/**
 * @file ip
 * @author xiaozhihua
 * @date 2018-12-13 22:09:57
 */

import Os from 'os'

export default {
  getIp() {
    let ip = ''
    let	infaces = Os.networkInterfaces()
  
    for (let i in infaces) {
      let state = infaces[i].some(x => {
        if ((x.family === 'IPv4') && (x.internal === false)) {
          ip = x.address
          
          return true
        }
      })
      
      if (state) {
        return ip
      }
    }
  
    return ip
  },
}