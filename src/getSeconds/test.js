// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getSeconds from '.'
import JDate from '../jDate'

describe('getSeconds', function() {
  it('returns the seconds of the given date', function() {
    var result = getSeconds(
      new JDate({
        year: 1398,
        month: 4 /* Mordad */,
        day: 12,
        h: 21,
        m: 42,
        s: 5
      })
    )
    assert(result === 5)
  })

  it('accepts a timestamp', function() {
    var result = getSeconds(
      new JDate({
        year: 1398,
        month: 4 /* Mordad */,
        day: 12,
        h: 21,
        m: 42,
        s: 42
      }).getTime()
    )
    assert(result === 42)
  })

  it('returns NaN if the given date is invalid', function() {
    var result = getSeconds(new JDate(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getSeconds.bind(null), TypeError)
  })
})
