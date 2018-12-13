const { Path } = require('../dist/node-tool.cjs')

console.log(Path.JoinApp('package.json'))
console.log(Path.JoinApp('./package.json'))
console.log(Path.JoinApp('/package.json'))
