// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import differenceInCalendarDays from '.'
import JDate from '../jDate'

describe('differenceInCalendarDays', function() {
  it('returns the number of calendar days between the given dates', function() {
    var result = differenceInCalendarDays(
      new JDate({ year: 1399, month: 8 /* Azar */, day: 13, h: 18, m: 0 }),
      new JDate({ year: 1399, month: 8 /* Azar */, day: 12, h: 6, m: 0 })
    )
    assert(result === 1)
  })

  it('returns a negative number if the time value of the first date is smaller', function() {
    var result = differenceInCalendarDays(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 13, h: 6, m: 0 }),
      new JDate({ year: 1398, month: 8 /* Azar */, day: 16, h: 18, m: 0 })
    )
    assert(result === -3)
  })

  it('accepts timestamps', function() {
    var result = differenceInCalendarDays(
      new JDate({
        year: 1399,
        month: 8 /* Azar */,
        day: 14,
        h: 18,
        m: 0
      }).getTime(),
      new JDate({
        year: 1399,
        month: 8 /* Azar */,
        day: 13,
        h: 6,
        m: 0
      }).getTime()
    )
    assert(result === 1)
  })

  describe('edge cases', function() {
    it('the difference is less than a day, but the given dates are in different calendar days', function() {
      var result = differenceInCalendarDays(
        new JDate({ year: 1399, month: 8 /* Azar */, day: 13, h: 0, m: 0 }),
        new JDate({ year: 1399, month: 8 /* Azar */, day: 12, h: 23, m: 59 })
      )
      assert(result === 1)
    })

    it('the same for the swapped dates', function() {
      var result = differenceInCalendarDays(
        new JDate({ year: 1399, month: 8 /* Azar */, day: 13, h: 23, m: 59 }),
        new JDate({ year: 1399, month: 8 /* Azar */, day: 14, h: 0, m: 0 })
      )
      assert(result === -1)
    })

    it('the time values of the given the given dates are the same', function() {
      var result = differenceInCalendarDays(
        new JDate({ year: 1399, month: 8 /* Azar */, day: 14, h: 0, m: 0 }),
        new JDate({ year: 1399, month: 8 /* Azar */, day: 13, h: 0, m: 0 })
      )
      assert(result === 1)
    })

    it('the given dates are the same', function() {
      var result = differenceInCalendarDays(
        new JDate({ year: 1399, month: 8 /* Azar */, day: 13, h: 18, m: 0 }),
        new JDate({ year: 1399, month: 8 /* Azar */, day: 13, h: 18, m: 0 })
      )
      assert(result === 0)
    })

    it('does not return -0 when the given dates are the same', () => {
      function isNegativeZero(x) {
        return x === 0 && 1 / x < 0
      }

      var result = differenceInCalendarDays(
        new JDate({ year: 1399, month: 8 /* Azar */, day: 13, h: 18, m: 0 }),
        new JDate({ year: 1399, month: 8 /* Azar */, day: 13, h: 18, m: 0 })
      )

      var resultIsNegative = isNegativeZero(result)
      assert(resultIsNegative === false)
    })
  })

  it('returns NaN if the first date is `Invalid Date`', function() {
    var result = differenceInCalendarDays(
      new JDate(NaN),
      new JDate({ year: 1399, month: 8 /* Azar */, day: 13, h: 18, m: 0 })
    )
    assert(isNaN(result))
  })

  it('returns NaN if the second date is `Invalid Date`', function() {
    var result = differenceInCalendarDays(
      new JDate({ year: 1399, month: 8 /* Azar */, day: 13, h: 18, m: 0 }),
      new JDate(NaN)
    )
    assert(isNaN(result))
  })

  it('returns NaN if the both dates are `Invalid Date`', function() {
    var result = differenceInCalendarDays(new JDate(NaN), new JDate(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(differenceInCalendarDays.bind(null), TypeError)
    assert.throws(differenceInCalendarDays.bind(null, 1), TypeError)
  })
})
