const { Net } = require('../build/main')

Net.getAvailablePort().then(port => {
  console.log(port)
})