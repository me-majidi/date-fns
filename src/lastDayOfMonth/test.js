// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import lastDayOfMonth from '.'
import JDate from '../jDate'

describe('lastDayOfMonth', function() {
  it('returns the date with the time set to 00:00:00 and the date set to the last day of a month', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = lastDayOfMonth(date)
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 30 })
    )
  })

  it('accepts a timestamp', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 }).getTime()
    var result = lastDayOfMonth(date)
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 30 })
    )
  })

  it('does not mutate the original date', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    lastDayOfMonth(date)
    assert.deepEqual(
      date,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    )
  })

  describe('edge cases', function() {
    it('works for the Esfand of a leap year', function() {
      var date = new JDate({ year: 1399, month: 11 /* Esfand */, day: 1 })
      var result = lastDayOfMonth(date)
      assert.deepEqual(
        result,
        new JDate({ year: 1399, month: 11 /* Esfand */, day: 30 })
      )
    })

    it('works for the Esfand of a non-leap year', function() {
      var date = new JDate({ year: 1398, month: 11 /* Esfand */, day: 1 })
      var result = lastDayOfMonth(date)
      assert.deepEqual(
        result,
        new JDate({ year: 1398, month: 11 /* Esfand */, day: 29 })
      )
    })
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = lastDayOfMonth(new JDate(NaN))
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(lastDayOfMonth.bind(null), TypeError)
  })
})
