// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import addYears from '.'
import JDate from '../jDate'

describe('addYears', function() {
  it('adds the given number of years', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = addYears(date, 5)
    assert.deepEqual(
      result.toString(),
      new JDate({ year: 1403, month: 8 /* Azar */, day: 1 }).toString()
    )
  })

  it('accepts a timestamp', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = addYears(date.getTime(), 12)
    assert.deepEqual(
      result.toString(),
      new JDate({ year: 1410, month: 8 /* Azar */, day: 1 }).toString()
    )
  })

  it('converts a fractional number to an integer', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = addYears(date, 5.555)
    assert.deepEqual(
      result.toString(),
      new JDate({ year: 1403, month: 8 /* Azar */, day: 1 }).toString()
    )
  })

  it('implicitly converts number arguments', function() {
    // $ExpectedMistake
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = addYears(date, '5')
    assert.deepEqual(
      result.toString(),
      new JDate({ year: 1403, month: 8 /* Azar */, day: 1 }).toString()
    )
  })

  it('does not mutate the original date', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    addYears(date, 12)
    assert.deepEqual(
      date.toString(),
      new JDate({ year: 1398, month: 8 /* Azar */, day: 1 }).toString()
    )
  })

  it('handles the leap years properly', function() {
    var date = new JDate({ year: 1399, month: 11 /* Esfand */, day: 30 })
    var result = addYears(date, 1)

    assert.equal(
      result.toString(),
      new JDate({ year: 1400, month: 11 /* Esfand */, day: 29 }).toString()
    )
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = addYears(new JDate(NaN), 5)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    var result = addYears(new JDate(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(addYears.bind(null), TypeError)
    assert.throws(addYears.bind(null, 1), TypeError)
  })
})
