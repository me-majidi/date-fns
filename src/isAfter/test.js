// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isAfter from '.'
import JDate from '../jDate'

describe('isAfter', function() {
  it('returns true if the first date is after the second one', function() {
    var result = isAfter(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 12 }),
      new JDate({ year: 1398, month: 8 /* Azar */, day: 8 })
    )
    assert(result === true)
  })

  it('returns false if the first date is before the second one', function() {
    var result = isAfter(
      new JDate({ year: 1372, month: 5 /* Mehr */, day: 12 }),
      new JDate({ year: 1398, month: 8 /* Azar */, day: 8 })
    )
    assert(result === false)
  })

  it('returns false if the first date is equal to the second one', function() {
    var result = isAfter(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 8 }),
      new JDate({ year: 1398, month: 8 /* Azar */, day: 8 })
    )
    assert(result === false)
  })

  it('accepts a timestamp', function() {
    var result = isAfter(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 18 }).getTime(),
      new JDate({ year: 1392, month: 1 /* Farvardin */, day: 2 }).getTime()
    )
    assert(result === true)
  })

  it('returns false if the first date is `Invalid Date`', function() {
    var result = isAfter(
      new JDate(NaN),
      new JDate({ year: 1398, month: 8 /* Azar */, day: 8 })
    )
    assert(result === false)
  })

  it('returns false if the second date is `Invalid Date`', function() {
    var result = isAfter(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 8 }),
      new JDate(NaN)
    )
    assert(result === false)
  })

  it('returns false if the both dates are `Invalid Date`', function() {
    var result = isAfter(new JDate(NaN), new JDate(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(isAfter.bind(null), TypeError)
    assert.throws(isAfter.bind(null, 1), TypeError)
  })
})
