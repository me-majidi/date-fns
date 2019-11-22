// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getHours from '.'
import JDate from '../jDate'

describe('getHours', function() {
  it('returns the hours of the given date', function() {
    var result = getHours(
      new JDate({
        year: 1399,
        month: 4 /* Mordad */,
        day: 12,
        h: 11,
        m: 42,
        s: 31
      })
    )
    assert(result === 11)
  })

  it('accepts a timestamp', function() {
    var result = getHours(
      new JDate({
        year: 1399,
        month: 4 /* Mordad */,
        day: 12,
        h: 23,
        m: 42,
        s: 31
      }).getTime()
    )
    assert(result === 23)
  })

  it('returns NaN if the given date is invalid', function() {
    var result = getHours(new JDate(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getHours.bind(null), TypeError)
  })
})
