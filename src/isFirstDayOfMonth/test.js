// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isFirstDayOfMonth from '.'
import JDate from '../jDate'

describe('isFirstDayOfMonth', function() {
  it('returns true if the given date is in the last day of month', function() {
    var result = isFirstDayOfMonth(
      new JDate({ year: 1394, month: 5 /* Shahrivar */, day: 1 })
    )
    assert(result === true)
  })

  it('returns false if the given date is not in the last day of month', function() {
    var result = isFirstDayOfMonth(
      new JDate({ year: 1394, month: 5 /* Shahrivar */, day: 3 })
    )
    assert(result === false)
  })

  it('accepts a timestamp', function() {
    var date = new JDate({
      year: 1394,
      month: 5 /* Shahrivar */,
      day: 1
    }).getTime()
    var result = isFirstDayOfMonth(date)
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', function() {
    var result = isFirstDayOfMonth(new JDate(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(isFirstDayOfMonth.bind(null), TypeError)
  })
})
