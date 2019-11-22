// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getDaysInMonth from '.'
import JDate from '../jDate'

describe('getDaysInMonth', function() {
  it('returns the number of days in the month of the given date', function() {
    var result = getDaysInMonth(
      new JDate({ year: 1398, month: 4 /* Mordad */, day: 12 })
    )
    assert(result === 31)
  })

  it('works for Esfand of a leap year', function() {
    var result = getDaysInMonth(
      new JDate({ year: 1399, month: 11 /* Esfand */, day: 12 })
    )
    assert(result === 30)
  })

  it('accepts a timestamp', function() {
    var date = new JDate({
      year: 1398,
      month: 11 /* Esfand */,
      day: 2
    }).getTime()
    var result = getDaysInMonth(date)
    assert(result === 29)
  })

  it('returns NaN if the given date is invalid', function() {
    var result = getDaysInMonth(new JDate(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getDaysInMonth.bind(null), TypeError)
  })
})
