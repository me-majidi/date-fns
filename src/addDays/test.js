// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import addDays from '.'
import JDate from '../jDate'

describe('addDays', function() {
  it('adds the given number of days', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 }) // 1 Azar 1398
    var result = addDays(date, 10)

    assert.equal(
      result.toString(),
      new JDate({ year: 1398, month: 8 /* Azar */, day: 11 }).toString()
    )
  })

  it('accepts a timestamp', function() {
    var result = addDays(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 1 }).getTime(),
      10
    )
    assert.deepEqual(
      result.toString(),
      new JDate({ year: 1398, month: 8 /* Azar */, day: 11 }).toString()
    )
  })

  it('converts a fractional number to an integer', function() {
    var result = addDays(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 1 }),
      10.5
    )
    assert.deepEqual(
      result.toString(),
      new JDate({ year: 1398, month: 8 /* Azar */, day: 11 }).toString()
    )
  })

  it('implicitly converts number arguments', function() {
    // $ExpectedMistake
    var result = addDays(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 1 }),
      '10'
    )
    assert.deepEqual(
      result.toString(),
      new JDate({ year: 1398, month: 8 /* Azar */, day: 11 }).toString()
    )
  })

  it('does not mutate the original date', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    addDays(date, 11)
    assert.deepEqual(
      date,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 1 })
    )
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = addDays(new Date(NaN), 10)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    var result = addDays(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(addDays.bind(null), TypeError)
    assert.throws(addDays.bind(null, 1), TypeError)
  })
})
