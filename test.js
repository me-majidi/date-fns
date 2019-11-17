var testsContext = require.context('./src/', true, /\/test\.js$/)

const convertedMethods = [
  'jDate',
  'addDays',
  'addHours',
  'addMilliseconds',
  'addMinutes',
  'addMonths',
  'addQuarters',
  'addSeconds',
  'addWeeks',
  'addYears',
  // 'areIntervalsOverlapping',
  'subSeconds',
  'subWeeks',
  'subYears',
  'toDate'
]

testsContext
  .keys()
  .filter(r => {
    const filename = r.split('/').filter(s => s !== '.')[0]
    return convertedMethods.indexOf(filename) !== -1
  })
  .forEach(testsContext)
