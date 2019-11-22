// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getMinutes from '.'
import JDate from '../jDate'

describe('getMinutes', function() {
  it('returns the minutes of the given date', function() {
    var result = getMinutes(
      new JDate({
        year: 1399,
        month: 4 /* Mordad */,
        day: 12,
        h: 11,
        m: 42,
        s: 31
      })
    )
    assert(result === 42)
  })

  it('accepts a timestamp', function() {
    var result = getMinutes(
      new JDate({
        year: 1399,
        month: 4 /* Mordad */,
        day: 12,
        h: 11,
        m: 23,
        s: 31
      }).getTime()
    )
    assert(result === 23)
  })

  it('returns NaN if the given date is invalid', function() {
    var result = getMinutes(new JDate(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getMinutes.bind(null), TypeError)
  })
})
