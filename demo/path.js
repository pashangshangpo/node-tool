const { Path } = require('../build/main')

console.log(Path.joinApp('package.json'))
console.log(Path.joinApp('./package.json'))
console.log(Path.joinApp('/package.json'))


Path.exists(Path.joinApp('package.json')).then(res => {
  console.log(res)
})

Path.exists(Path.joinApp('package.json1')).then(res => {
  console.log(res)
})