(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('path'), require('fs'), require('os'), require('net')) :
  typeof define === 'function' && define.amd ? define(['exports', 'path', 'fs', 'os', 'net'], factory) :
  (factory((global.nodeTool = {}),global.Path,global.Fs,global.Os,global.Net));
}(this, (function (exports,Path,Fs,Os,Net) { 'use strict';

  Path = Path && Path.hasOwnProperty('default') ? Path['default'] : Path;
  Fs = Fs && Fs.hasOwnProperty('default') ? Fs['default'] : Fs;
  Os = Os && Os.hasOwnProperty('default') ? Os['default'] : Os;
  Net = Net && Net.hasOwnProperty('default') ? Net['default'] : Net;

  /**
   * @file path
   * @author xiaozhihua
   * @date 2018-12-13 20:39:07
   */
  var path = {
    joinApp: function joinApp() {
      for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
        arg[_key] = arguments[_key];
      }

      return Path.join.apply(Path, [process.cwd()].concat(arg));
    },
    exists: function exists(path) {
      return new Promise(function (resolve) {
        Fs.stat(path, function (err) {
          resolve(err == null);
        });
      });
    }
  };

  /**
   * @file ip
   * @author xiaozhihua
   * @date 2018-12-13 22:09:57
   */
  var os = {
    getIp: function getIp() {
      var ip = '';
      var infaces = Os.networkInterfaces();

      for (var i in infaces) {
        var state = infaces[i].some(function (x) {
          if (x.family === 'IPv4' && x.internal === false) {
            ip = x.address;
            return true;
          }
        });

        if (state) {
          return ip;
        }
      }

      return ip;
    }
  };

  /**
   * @file net
   * @author xiaozhihua
   * @date 2018-12-13 22:16:00
   */

  var GetAvailablePort = function GetAvailablePort() {
    var port = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 9000;
    var r = arguments.length > 1 ? arguments[1] : undefined;
    return new Promise(function (resolve) {
      var Server = Net.createServer().listen(port);
      r = r || resolve;
      Server.on('listening', function () {
        Server.once('close', function () {
          r(port);
        });
        Server.close();
      });
      Server.on('error', function (err) {
        if (err.code === 'EADDRINUSE') {
          GetAvailablePort(port + 1, r);
        }
      });
    });
  };

  var net = {
    getAvailablePort: GetAvailablePort
  };

  /**
   * @file index
   * @author xiaozhihua
   * @date 2018-12-13 20:35:46
   */

  exports.Path = path;
  exports.Os = os;
  exports.Net = net;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
