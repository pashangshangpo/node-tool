/**
 * @file net
 * @author xiaozhihua
 * @date 2018-12-13 22:16:00
 */

import Net from 'net'

const GetAvailablePort = (port = 9000, r) => {
  return new Promise(resolve => {
    const Server = Net.createServer().listen(port)

    r = r || resolve
  
    Server.on('listening', () => {
      Server.once('close', () => {
        r(port)
      })

      Server.close()
    })

    Server.on('error', err => {
      if (err.code === 'EADDRINUSE') {
        GetAvailablePort(port + 1, r)
      }
    })
  })
}

export default {
  getAvailablePort: GetAvailablePort
}
