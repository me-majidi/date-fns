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
  'differenceInCalendarDays',
  'lastDayOfMonth',
  'lastDayOfWeek',
  'lastDayOfYear',
  // 'areIntervalsOverlapping',
  'getDate',
  'getDay',
  'getDayOfYear',
  'getDaysInMonth',
  'getDaysInYear',
  'getDecade',
  'getHours',
  'getMilliseconds',
  'getMinutes',
  'getMonth',
  'getQuarter',
  'isLeapYear',
  'setYear',
  'startOfDay',
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
