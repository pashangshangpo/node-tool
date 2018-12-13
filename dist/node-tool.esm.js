import Path from 'path';

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

export { path as Path };
