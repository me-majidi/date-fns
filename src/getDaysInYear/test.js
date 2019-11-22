// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getDaysInYear from '.'
import JDate from '../jDate'

describe('getDaysInYear', function() {
  it('returns the number of days in the year of the given date', function() {
    var result = getDaysInYear(
      new JDate({ year: 1398, month: 4 /* Mordad */, day: 12 })
    )
    assert(result === 365)
  })

  it('works for a leap year', function() {
    var result = getDaysInYear(
      new JDate({ year: 1399, month: 4 /* Mordad */, day: 12 })
    )
    assert(result === 366)
  })

  it('accepts a timestamp', function() {
    var date = new JDate({
      year: 1399,
      month: 4 /* Mordad */,
      day: 12
    }).getTime()
    var result = getDaysInYear(date)
    assert(result === 366)
  })

  it('returns NaN if the given date is invalid', function() {
    var result = getDaysInYear(new JDate(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getDaysInYear.bind(null), TypeError)
  })
})
