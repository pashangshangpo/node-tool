const { Net } = require('../dist/node-tool.cjs')

Net.getAvailablePort().then(port => {
  console.log(port)
})