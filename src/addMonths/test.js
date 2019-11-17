// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import addMonths from '.'
import JDate from '../jDate'

describe('addMonths', function() {
  it('adds the given number of months', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = addMonths(date, 5)
    assert.equal(
      result.toString(),
      new JDate({ year: 1399, month: 1 /* Ordibehesht */, day: 1 }).toString()
    )
  })

  it('accepts a timestamp', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = addMonths(date.getTime(), 12)
    assert.equal(
      result.toString(),
      new JDate({ year: 1399, month: 8 /* Azar */, day: 1 }).toString()
    )
  })

  it('converts a fractional number to an integer', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = addMonths(date, 5.75)
    assert.equal(
      result.toString(),
      new JDate({ year: 1399, month: 1 /* Ordibehesht */, day: 1 }).toString()
    )
  })

  it('implicitly converts number arguments', function() {
    // $ExpectedMistake
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = addMonths(date, '5')
    assert.equal(
      result.toString(),
      new JDate({ year: 1399, month: 1 /* Ordibehesht */, day: 1 }).toString()
    )
  })

  it('does not mutate the original date', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    addMonths(date, 12)
    assert.equal(
      date.toString(),
      new JDate({ year: 1398, month: 8 /* Azar */, day: 1 }).toString()
    )
  })

  // it('works well if the desired month has fewer days and the provided date is in the last day of a month', function() {
  //   var date = new Date(2014, 11 /* Dec */, 31)
  //   var result = addMonths(date, 2)
  //   assert.equal(result, new Date(2015, 1 /* Feb */, 28))
  // })
  //
  // it('handles dates before 100 AD', function() {
  //   var initialDate = new Date(0)
  //   initialDate.setFullYear(0, 0 /* Jan */, 31)
  //   initialDate.setHours(0, 0, 0, 0)
  //   var expectedResult = new Date(0)
  //   expectedResult.setFullYear(0, 1 /* Feb */, 29)
  //   expectedResult.setHours(0, 0, 0, 0)
  //   var result = addMonths(initialDate, 1)
  //   assert.equal(result, expectedResult)
  // })
  //
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
