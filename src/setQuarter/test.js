// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setQuarter from '.'
import JDate from '../jDate'

describe('setQuarter', function() {
  it('sets the quarter of the year', function() {
    var result = setQuarter(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 12 }),
      1
    )
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 0 /* Farvardin */, day: 12 })
    )
  })

  it('sets the last day of the month if the original date was the last day of a longer month', function() {
    var result = setQuarter(
      new JDate({ year: 1398, month: 3 /* Tir */, day: 31 }),
      4
    )
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 9 /* Dey */, day: 30 })
    )
  })

  it('accepts a timestamp', function() {
    var result = setQuarter(
      new JDate({ year: 1398, month: 3 /* Tir */, day: 31 }).getTime(),
      4
    )
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 9 /* Dey */, day: 31 })
    )
  })

  it('converts a fractional number to an integer', function() {
    var result = setQuarter(
      new JDate({ year: 1398, month: 5 /* Shahrivar */, day: 31 }),
      1.951
    )
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 0 /* Farvardin */, day: 31 })
    )
  })

  it('implicitly converts number arguments', function() {
    // $ExpectedMistake
    var result = setQuarter(
      new JDate({ year: 1398, month: 5 /* Shahrivar */, day: 31 }),
      '1'
    )
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 0 /* Farvardin */, day: 31 })
    )
  })

  it('does not mutate the original date', function() {
    var date = new JDate({ year: 1398, month: 5 /* Shahrivar */, day: 31 })
    setQuarter(date, 2)
    assert.deepEqual(
      date,
      new JDate({ year: 1398, month: 5 /* Shahrivar */, day: 31 })
    )
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = setQuarter(new Date(NaN), 1)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    var result = setQuarter(new Date(2014, 6 /* Jul */, 2), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(setQuarter.bind(null), TypeError)
    assert.throws(setQuarter.bind(null, 1), TypeError)
  })
})
