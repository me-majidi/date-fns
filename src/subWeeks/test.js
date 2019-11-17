// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import subWeeks from '.'
import JDate from '../jDate'

describe('subWeeks', function() {
  it('subtracts the given number of weeks', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = subWeeks(date, 4)
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 7 /* Aban */, day: 4 })
    )
  })

  it('accepts a timestamp', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = subWeeks(date.getTime(), 1)
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 7 /* Aban */, day: 25 })
    )
  })

  it('converts a fractional number to an integer', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = subWeeks(date, 4.2)
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 7 /* Aban */, day: 4 })
    )
  })

  it('implicitly converts number arguments', function() {
    // $ExpectedMistake
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = subWeeks(date, '4')
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 7 /* Aban */, day: 4 })
    )
  })

  it('does not mutate the original date', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    subWeeks(date, 2)
    assert.deepEqual(
      date,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    )
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = subWeeks(new JDate(NaN), 4)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    var result = subWeeks(new JDate(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(subWeeks.bind(null), TypeError)
    assert.throws(subWeeks.bind(null, 1), TypeError)
  })
})
