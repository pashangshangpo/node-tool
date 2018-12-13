(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('path')) :
  typeof define === 'function' && define.amd ? define(['exports', 'path'], factory) :
  (factory((global.nodeTool = {}),global.Path));
}(this, (function (exports,Path) { 'use strict';

  Path = Path && Path.hasOwnProperty('default') ? Path['default'] : Path;

  /**
   * @file path
   * @author xiaozhihua
   * @date 2018-12-13 20:39:07
   */
  var path = {
    JoinApp: function JoinApp() {
      for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
        arg[_key] = arguments[_key];
      }

      return Path.join.apply(Path, [process.cwd()].concat(arg));
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
