// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isBefore from '.'
import JDate from '../jDate'

describe('isBefore', function() {
  it('returns true if the first date is before the second one', function() {
    var result = isBefore(
      new JDate({ year: 1391, month: 8 /* Azar */, day: 8 }),
      new JDate({ year: 1394, month: 5 /* Tir */, day: 21 })
    )
    assert(result === true)
  })

  it('returns false if the first date is after the second one', function() {
    var result = isBefore(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 15 }),
      new JDate({ year: 1394, month: 3 /* Tir */, day: 21 })
    )
    assert(result === false)
  })

  it('returns false if the first date is equal to the second one', function() {
    var result = isBefore(
      new JDate({ year: 1394, month: 3 /* Tir */, day: 21 }),
      new JDate({ year: 1394, month: 3 /* Tir */, day: 21 })
    )
    assert(result === false)
  })

  it('accepts a timestamp', function() {
    var result = isBefore(
      new JDate({ year: 1394, month: 3 /* Tir */, day: 21 }).getTime(),
      new JDate({ year: 1394, month: 5 /* Shahrivar */, day: 3 }).getTime()
    )
    assert(result === true)
  })

  it('returns false if the first date is `Invalid Date`', function() {
    var result = isBefore(
      new JDate(NaN),
      new JDate({ year: 1394, month: 5 /* Shahrivar */, day: 3 })
    )
    assert(result === false)
  })

  it('returns false if the second date is `Invalid Date`', function() {
    var result = isBefore(
      new JDate({ year: 1394, month: 5 /* Shahrivar */, day: 3 }),
      new JDate(NaN)
    )
    assert(result === false)
  })

  it('returns false if the both dates are `Invalid Date`', function() {
    var result = isBefore(new JDate(NaN), new JDate(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(isBefore.bind(null), TypeError)
    assert.throws(isBefore.bind(null, 1), TypeError)
  })
})
