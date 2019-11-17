// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import subYears from '.'
import JDate from '../jDate'

describe('subYears', function() {
  it('subtracts the given number of years', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = subYears(date, 5)
    assert.deepEqual(
      result,
      new JDate({ year: 1393, month: 8 /* Azar */, day: 1 })
    )
  })

  it('accepts a timestamp', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = subYears(date.getTime(), 12)
    assert.deepEqual(
      result,
      new JDate({ year: 1386, month: 8 /* Azar */, day: 1 })
    )
  })

  it('converts a fractional number to an integer', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = subYears(date, 5.1)
    assert.deepEqual(
      result,
      new JDate({ year: 1393, month: 8 /* Azar */, day: 1 })
    )
  })

  it('implicitly converts number arguments', function() {
    // $ExpectedMistake
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = subYears(date, '5')
    assert.deepEqual(
      result,
      new JDate({ year: 1393, month: 8 /* Azar */, day: 1 })
    )
  })

  it('does not mutate the original date', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    subYears(date, 12)
    assert.deepEqual(
      date,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    )
  })

  it('handles the leap years properly', function() {
    var date = new JDate({ year: 1399, month: 11 /* Esfand */, day: 30 })
    var result = subYears(date, 1)
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 11 /* Esfand */, day: 29 })
    )
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = subYears(new Date(NaN), 5)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    var result = subYears(new JDate(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(subYears.bind(null), TypeError)
    assert.throws(subYears.bind(null, 1), TypeError)
  })
})
