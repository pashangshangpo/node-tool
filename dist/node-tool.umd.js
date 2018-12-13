(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('path'), require('fs')) :
  typeof define === 'function' && define.amd ? define(['exports', 'path', 'fs'], factory) :
  (factory((global.nodeTool = {}),global.Path,global.Fs));
}(this, (function (exports,Path,Fs) { 'use strict';

  Path = Path && Path.hasOwnProperty('default') ? Path['default'] : Path;
  Fs = Fs && Fs.hasOwnProperty('default') ? Fs['default'] : Fs;

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
        Fs.stat(path, function (err, stats) {
          resolve(err == null);
        });
      });
    }
  };

  /**
   * @file index
   * @author xiaozhihua
   * @date 2018-12-13 20:35:46
   */

  exports.Path = path;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
