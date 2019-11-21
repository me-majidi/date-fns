// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import startOfMonth from '.'
import JDate from '../jDate'

describe('startOfMonth', function() {
  it('returns the date with the time set to 00:00:00 and the date set to the first day of a month', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 12 })
    var result = startOfMonth(date)
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    )
  })

  it('accepts a timestamp', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 12 }).getTime()
    var result = startOfMonth(date)
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    )
  })

  it('does not mutate the original date', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 12 })
    startOfMonth(date)
    assert.deepEqual(
      date,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 12 })
    )
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = startOfMonth(new Date(NaN))
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(startOfMonth.bind(null), TypeError)
  })
})
