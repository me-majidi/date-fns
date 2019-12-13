// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isLastDayOfMonth from '.'
import JDate from '../jDate'

describe('isLastDayOfMonth', function() {
  it('returns true if the given date is in the last day of month', function() {
    var result = isLastDayOfMonth(
      new JDate({ year: 1398, month: 11 /* Esfand */, day: 30 })
    )
    assert(result === true)
  })

  it('returns false if the given date is not in the last day of month', function() {
    var result = isLastDayOfMonth(
      new JDate({ year: 1398, month: 11 /* Esfand */, day: 28 })
    )
    assert(result === false)
  })

  it('accepts a timestamp', function() {
    var date = new JDate({
      year: 1398,
      month: 11 /* Esfand */,
      day: 30
    }).getTime()
    var result = isLastDayOfMonth(date)
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', function() {
    var result = isLastDayOfMonth(new Date(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(isLastDayOfMonth.bind(null), TypeError)
  })
})
