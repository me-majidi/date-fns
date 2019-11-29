// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setMonth from '.'
import JDate from '../jDate'

describe('setMonth', function() {
  it('sets the month', function() {
    var result = setMonth(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 12 }),
      1
    )
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 1 /* Ordibehesht */, day: 12 })
    )
  })

  it('sets the last day of the month if the original date was the last day of a longer month', function() {
    var result = setMonth(
      new JDate({ year: 1398, month: 3 /* Tir */, day: 31 }),
      9
    )
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 9 /* Dey */, day: 30 })
    )
  })

  it('accepts a timestamp', function() {
    var result = setMonth(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 12 }).getTime(),
      11
    )
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 11 /* Esfand */, day: 12 })
    )
  })

  it('converts a fractional number to an integer', function() {
    var result = setMonth(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 12 }),
      1.5
    )
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 1 /* Ordibehesht */, day: 12 })
    )
  })

  it('implicitly converts number arguments', function() {
    // $ExpectedMistake
    var result = setMonth(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 12 }),
      '1'
    )
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 1 /* Ordibehesht */, day: 12 })
    )
  })

  it('does not mutate the original date', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 12 })
    setMonth(date, 5)
    assert.deepEqual(
      date,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 12 })
    )
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = setMonth(new Date(NaN), 1)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    var result = setMonth(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(setMonth.bind(null), TypeError)
    assert.throws(setMonth.bind(null, 1), TypeError)
  })
})
