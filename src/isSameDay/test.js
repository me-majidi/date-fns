// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isSameDay from '.'
import JDate from '../jDate'

describe('isSameDay', function() {
  it('returns true if the given dates have the same day', function() {
    var result = isSameDay(
      new JDate({ year: 1399, month: 4 /* Mordad */, day: 6, h: 12, m: 42 }),
      new JDate({ year: 1399, month: 4 /* Mordad */, day: 6, h: 23, m: 15 })
    )
    assert(result === true)
  })

  it('returns false if the given dates have different days', function() {
    var result = isSameDay(
      new JDate({ year: 1399, month: 4 /* Mordad */, day: 6, h: 12, m: 32 }),
      new JDate({ year: 1399, month: 4 /* Mordad */, day: 9, h: 12, m: 32 })
    )
    assert(result === false)
  })

  it('accepts a timestamp', function() {
    var result = isSameDay(
      new JDate({
        year: 1399,
        month: 4 /* Mordad */,
        day: 6,
        h: 21,
        m: 32
      }).getTime(),
      new JDate({
        year: 1399,
        month: 4 /* Mordad */,
        day: 6,
        h: 3,
        m: 49
      }).getTime()
    )
    assert(result === true)
  })

  it('returns false if the first date is `Invalid Date`', function() {
    var result = isSameDay(new Date(NaN), new Date(1989, 6 /* Jul */, 10))
    assert(result === false)
  })

  it('returns false if the second date is `Invalid Date`', function() {
    var result = isSameDay(new Date(1987, 1 /* Feb */, 11), new Date(NaN))
    assert(result === false)
  })

  it('returns false if the both dates are `Invalid Date`', function() {
    var result = isSameDay(new Date(NaN), new Date(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(isSameDay.bind(null), TypeError)
    assert.throws(isSameDay.bind(null, 1), TypeError)
  })
})
