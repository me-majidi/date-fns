var testsContext = require.context('./src/', true, /\/test\.js$/)

const convertedMethods = ['jDate']

testsContext
  .keys()
  .filter(r => {
    const filename = r.split('/').filter(s => s !== '.')[0]
    return convertedMethods.indexOf(filename) !== -1
  })
  .forEach(testsContext)
