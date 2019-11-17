// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import lastDayOfYear from '.'
import JDate from '../jDate'

describe('lastDayOfYear', function() {
  it('returns the date with the time set to 00:00:00 and the date set to the last day of a year', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = lastDayOfYear(date)

    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 11 /* Esfand */, day: 29 })
    )
  })

  it('accepts a timestamp', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 }).getTime()
    var result = lastDayOfYear(date)
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 11 /* Esfand */, day: 29 })
    )
  })

  it('does not mutate the original date', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    lastDayOfYear(date)
    assert.deepEqual(
      date,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    )
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = lastDayOfYear(new JDate(NaN))
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(lastDayOfYear.bind(null), TypeError)
  })
})
