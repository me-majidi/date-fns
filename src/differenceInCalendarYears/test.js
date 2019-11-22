// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import differenceInCalendarYears from '.'
import JDate from '../jDate'

describe('differenceInCalendarYears', function() {
  it('returns the number of calendar years between the given dates', function() {
    var result = differenceInCalendarYears(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 22, h: 18, m: 0 }),
      new JDate({ year: 1397, month: 9 /* Dey */, day: 22, h: 6, m: 0 })
    )
    assert(result === 1)
  })

  it('returns a negative number if the time value of the first date is smaller', function() {
    var result = differenceInCalendarYears(
      new JDate({ year: 1397, month: 9 /* Dey */, day: 22, h: 6, m: 0 }),
      new JDate({ year: 1398, month: 8 /* Azar */, day: 22, h: 18, m: 0 })
    )
    assert(result === -1)
  })

  it('accepts timestamps', function() {
    var result = differenceInCalendarYears(
      new JDate({
        year: 1398,
        month: 9 /* Dey */,
        day: 22,
        h: 6,
        m: 0
      }).getTime(),
      new JDate({
        year: 1394,
        month: 9 /* Dey */,
        day: 21,
        h: 18,
        m: 0
      }).getTime()
    )
    assert(result === 4)
  })

  describe('edge cases', function() {
    it('the difference is less than a year, but the given dates are in different calendar years', function() {
      var result = differenceInCalendarYears(
        new JDate({ year: 1398, month: 1 /* Farvardin */, day: 22 }),
        new JDate({ year: 1397, month: 9 /* Dey */, day: 11 })
      )
      assert(result === 1)
    })

    it('the same for the swapped dates', function() {
      var result = differenceInCalendarYears(
        new JDate({ year: 1397, month: 9 /* Dey */, day: 11 }),
        new JDate({ year: 1398, month: 1 /* Farvardin */, day: 22 })
      )
      assert(result === -1)
    })

    it('the days and months of the given dates are the same', function() {
      var result = differenceInCalendarYears(
        new JDate({ year: 1398, month: 1 /* Farvardin */, day: 22 }),
        new JDate({ year: 1396, month: 1 /* Farvardin */, day: 22 })
      )
      assert(result === 2)
    })

    it('the given dates are the same', function() {
      var result = differenceInCalendarYears(
        new JDate({ year: 1398, month: 1 /* Farvardin */, day: 22 }),
        new JDate({ year: 1398, month: 1 /* Farvardin */, day: 22 })
      )
      assert(result === 0)
    })

    it('does not return -0 when the given dates are the same', () => {
      function isNegativeZero(x) {
        return x === 0 && 1 / x < 0
      }

      var result = differenceInCalendarYears(
        new JDate({ year: 1398, month: 1 /* Farvardin */, day: 22 }),
        new JDate({ year: 1398, month: 1 /* Farvardin */, day: 22 })
      )

      var resultIsNegative = isNegativeZero(result)
      assert(resultIsNegative === false)
    })
  })

  it('returns NaN if the first date is `Invalid Date`', function() {
    var result = differenceInCalendarYears(
      new JDate(NaN),
      new JDate({ year: 1398, month: 1 /* Farvardin */, day: 22 })
    )
    assert(isNaN(result))
  })

  it('returns NaN if the second date is `Invalid Date`', function() {
    var result = differenceInCalendarYears(
      new JDate({ year: 1398, month: 1 /* Farvardin */, day: 22 }),
      new JDate(NaN)
    )
    assert(isNaN(result))
  })

  it('returns NaN if the both dates are `Invalid Date`', function() {
    var result = differenceInCalendarYears(new JDate(NaN), new JDate(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(differenceInCalendarYears.bind(null), TypeError)
    assert.throws(differenceInCalendarYears.bind(null, 1), TypeError)
  })
})
