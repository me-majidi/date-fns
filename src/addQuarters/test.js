// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import addQuarters from '.'
import JDate from '../jDate'

describe('addQuarters', function() {
  it('adds the given number of quarters', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = addQuarters(date, 1)
    assert.deepEqual(
      result.toString(),
      new JDate({ year: 1398, month: 11 /* Esfand */, day: 1 }).toString()
    )
  })

  it('accepts a timestamp', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = addQuarters(date.getTime(), 4)
    assert.deepEqual(
      result.toString(),
      new JDate({ year: 1399, month: 8 /* Azar */, day: 1 }).toString()
    )
  })

  it('converts a fractional number to an integer', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = addQuarters(date, 1.91)
    assert.deepEqual(
      result.toString(),
      new JDate({ year: 1398, month: 11 /* Esfand */, day: 1 }).toString()
    )
  })

  it('implicitly converts number arguments', function() {
    // $ExpectedMistake
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    var result = addQuarters(date, '1')
    assert.deepEqual(
      result.toString(),
      new JDate({ year: 1398, month: 11 /* Esfand */, day: 1 }).toString()
    )
  })

  it('does not mutate the original date', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    addQuarters(date, 4)
    assert.deepEqual(
      date.toString(),
      new JDate({ year: 1398, month: 8 /* Azar */, day: 1 }).toString()
    )
  })

  it('works well if the desired month has fewer days and the provided date is in the last day of a month', function() {
    var date = new JDate({ year: 1399, month: 11 /* Esfand */, day: 30 }) // 1399 is leap year
    var result = addQuarters(date, 4)
    assert.deepEqual(
      result.toString(),
      new JDate({ year: 1400, month: 11 /* Esfand */, day: 29 }).toString()
    )
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = addQuarters(new JDate(NaN), 1)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    var result = addQuarters(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 1 }),
      NaN
    )
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(addQuarters.bind(null), TypeError)
    assert.throws(addQuarters.bind(null, 1), TypeError)
  })
})
