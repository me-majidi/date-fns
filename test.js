var testsContext = require.context('./src', true, /\/test\.js$/)

var convertedFunctions = ['jDate', 'addDays']

testsContext
  .keys()
  .filter(r => {
    var methodName = r.split('/').filter(s => s !== '.')[0]

    return convertedFunctions.indexOf(methodName) !== -1
  })
  .forEach(testsContext)
