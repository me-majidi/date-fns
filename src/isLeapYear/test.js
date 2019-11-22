// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isLeapYear from '.'
import JDate from '../jDate'

describe('isLeapYear', function() {
  it('returns true if the given date is in the leap year', function() {
    var result = isLeapYear(
      new JDate({ year: 1399, month: 4 /* Mordad */, day: 12 })
    )
    assert(result === true)
  })

  it('returns false if the given date is not in the leap year', function() {
    var result = isLeapYear(
      new JDate({ year: 1398, month: 4 /* Mordad */, day: 12 })
    )
    assert(result === false)
  })

  it('accepts a timestamp', function() {
    var date = new JDate({
      year: 1399,
      month: 4 /* Mordad */,
      day: 12
    }).getTime()
    var result = isLeapYear(date)
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', function() {
    var result = isLeapYear(new JDate(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(isLeapYear.bind(null), TypeError)
  })
})
