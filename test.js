var testsContext = require.context('./src/', true, /\/test\.js$/)

const convertedMethods = [
  // '_lib',
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
  'lastDayOfMonth',
  'lastDayOfWeek',
  'lastDayOfYear',
  // 'areIntervalsOverlapping',
  'startOfHour',
  'startOfMinute',
  'startOfMonth',
  'startOfSecond',
  'startOfToday',
  'startOfTomorrow',
  'startOfWeek',
  'startOfYear',
  'startOfYesterday',
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
