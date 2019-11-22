// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getMilliseconds from '.'
import JDate from '../jDate'

describe('getMilliseconds', function() {
  it('returns the milliseconds of the given date', function() {
    var result = getMilliseconds(
      new JDate({
        year: 1399,
        month: 4 /* Mordad */,
        day: 12,
        h: 11,
        m: 42,
        s: 31,
        ms: 123
      })
    )

    assert(result === 123)
  })

  it('accepts a timestamp', function() {
    var result = getMilliseconds(
      new JDate({
        year: 1399,
        month: 4 /* Mordad */,
        day: 12,
        h: 11,
        m: 42,
        s: 31,
        ms: 500
      }).getTime()
    )
    assert(result === 500)
  })

  it('returns NaN if the given date is invalid', function() {
    var result = getMilliseconds(new JDate(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getMilliseconds.bind(null), TypeError)
  })
})
