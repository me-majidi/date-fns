// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import addMonths from '.'
import JDate from '../jDate'

describe('addMonths', function() {
  it('adds the given number of months', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = addMonths(date, 5)
    assert.deepEqual(
      result,
      new JDate({ year: 1399, month: 1 /* Ordibehesht */, day: 1 })
    )
  })

  it('accepts a timestamp', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = addMonths(date.getTime(), 12)
    assert.deepEqual(
      result,
      new JDate({ year: 1399, month: 8 /* Azar */, day: 1 })
    )
  })

  it('converts a fractional number to an integer', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = addMonths(date, 5.75)
    assert.deepEqual(
      result,
      new JDate({ year: 1399, month: 1 /* Ordibehesht */, day: 1 })
    )
  })

  it('implicitly converts number arguments', function() {
    // $ExpectedMistake
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = addMonths(date, '5')
    assert.deepEqual(
      result,
      new JDate({ year: 1399, month: 1 /* Ordibehesht */, day: 1 })
    )
  })

  it('does not mutate the original date', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    addMonths(date, 12)
    assert.deepEqual(
      date,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    )
  })

  it('works well if the desired month has fewer days and the provided date is in the last day of a month', function() {
    var date = new JDate({ year: 1398, month: 5 /* Tir */, day: 31 })
    var result = addMonths(date, 2)
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 7 /* Aban */, day: 30 })
    )
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = addMonths(new JDate(NaN), 5)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = addMonths(date, NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(addMonths.bind(null), TypeError)
    assert.throws(addMonths.bind(null, 1), TypeError)
  })
})
