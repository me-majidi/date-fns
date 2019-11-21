// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setYear from '.'
import JDate from '../jDate'

describe('setYear', function() {
  it('sets the year', function() {
    var result = setYear(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 22 }),
      1392
    )
    assert.deepEqual(
      result,
      new JDate({ year: 1392, month: 8 /* Azar */, day: 22 })
    )
  })

  it('accepts a timestamp', function() {
    var result = setYear(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 22 }).getTime(),
      1391
    )
    assert.deepEqual(
      result,
      new JDate({ year: 1391, month: 8 /* Azar */, day: 22 })
    )
  })

  it('converts a fractional number to an integer', function() {
    var result = setYear(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 22 }),
      1381.987654321
    )
    assert.deepEqual(
      result,
      new JDate({ year: 1381, month: 8 /* Azar */, day: 22 })
    )
  })

  it('implicitly converts number arguments', function() {
    // $ExpectedMistake
    var result = setYear(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 22 }),
      '1374'
    )
    assert.deepEqual(
      result,
      new JDate({ year: 1374, month: 8 /* Azar */, day: 22 })
    )
  })

  it('does not mutate the original date', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 22 })
    setYear(date, 2011)
    assert.deepEqual(
      date,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 22 })
    )
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = setYear(new Date(NaN), 2013)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    var result = setYear(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(setYear.bind(null), TypeError)
    assert.throws(setYear.bind(null, 1), TypeError)
  })
})
