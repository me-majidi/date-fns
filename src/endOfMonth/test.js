// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import endOfMonth from '.'
import JDate from '../jDate'

describe('endOfMonth', function() {
  it('returns the date with the time set to 23:59:59.999 and the date set to the last day of a month', function() {
    var date = new JDate({
      year: 1398,
      month: 8 /* Azar */,
      day: 22,
      h: 11,
      m: 55,
      s: 0
    })
    var result = endOfMonth(date)
    assert.deepEqual(
      result,
      new JDate({
        year: 1398,
        month: 8 /* Azar */,
        day: 30,
        h: 23,
        m: 59,
        s: 59,
        ms: 999
      })
    )
  })

  it('accepts a timestamp', function() {
    var date = new JDate({
      year: 1398,
      month: 8 /* Azar */,
      day: 22,
      h: 11,
      m: 55,
      s: 0
    }).getTime()
    var result = endOfMonth(date)
    assert.deepEqual(
      result,
      new JDate({
        year: 1398,
        month: 8 /* Azar */,
        day: 30,
        h: 23,
        m: 59,
        s: 59,
        ms: 999
      })
    )
  })

  it('does not mutate the original date', function() {
    var date = new JDate({
      year: 1398,
      month: 8 /* Azar */,
      day: 22,
      h: 11,
      m: 55,
      s: 0
    })
    endOfMonth(date)
    assert.deepEqual(
      date,
      new JDate({
        year: 1398,
        month: 8 /* Azar */,
        day: 22,
        h: 11,
        m: 55,
        s: 0
      })
    )
  })

  describe('edge cases', function() {
    it('works for last month in year', function() {
      var date = new JDate({
        year: 1398,
        month: 11 /* Esfand */,
        day: 22,
        h: 11,
        m: 55,
        s: 0
      })
      var result = endOfMonth(date)
      assert.deepEqual(
        result,
        new JDate({
          year: 1398,
          month: 11 /* Esfand */,
          day: 30,
          h: 23,
          m: 59,
          s: 59,
          ms: 999
        })
      )
    })

    it('works for last day of month', function() {
      var date = new JDate({ year: 1398, month: 9 /* Dey */, day: 30 })
      var result = endOfMonth(date)
      assert.deepEqual(
        result,
        new JDate({
          year: 1398,
          month: 9 /* Dey */,
          day: 30,
          h: 23,
          m: 59,
          s: 59,
          ms: 999
        })
      )
    })
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = endOfMonth(new JDate(NaN))
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(endOfMonth.bind(null), TypeError)
  })
})
