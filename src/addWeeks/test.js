// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import addWeeks from '.'
import JDate from '../jDate'

describe('addWeeks', function() {
  it('adds the given number of weeks', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = addWeeks(date, 4)
    assert.equal(
      result.toString(),
      new JDate({ year: 1398, month: 8 /* Azar */, day: 29 }).toString()
    )
  })

  it('accepts a timestamp', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = addWeeks(date.getTime(), 1)
    assert.equal(
      result.toString(),
      new JDate({ year: 1398, month: 8 /* Azar */, day: 8 }).toString()
    )
  })

  it('converts a fractional number to an integer', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = addWeeks(date, 4.95)
    assert.equal(
      result.toString(),
      new JDate({ year: 1398, month: 8 /* Azar */, day: 29 }).toString()
    )
  })

  it('implicitly converts number arguments', function() {
    // $ExpectedMistake
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = addWeeks(date, '4')
    assert.equal(
      result.toString(),
      new JDate({ year: 1398, month: 8 /* Azar */, day: 29 }).toString()
    )
  })

  it('does not mutate the original date', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    addWeeks(date, 2)
    assert.equal(
      date.toString(),
      new JDate({ year: 1398, month: 8 /* Azar */, day: 1 }).toString()
    )
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = addWeeks(new JDate(NaN), 4)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    var result = addWeeks(new JDate(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(addWeeks.bind(null), TypeError)
    assert.throws(addWeeks.bind(null, 1), TypeError)
  })
})
