// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getQuarter from '.'
import JDate from '../jDate'

describe('getQuarter', function() {
  it('returns the quarter of the given date', function() {
    var result = getQuarter(
      new JDate({ year: 1398, month: 4 /* Mordad */, day: 12 })
    )
    assert(result === 2)
  })

  it('accepts a timestamp', function() {
    var result = getQuarter(
      new JDate({ year: 1398, month: 10 /* Bahman */, day: 7 }).getTime()
    )
    assert(result === 4)
  })

  it('returns NaN if the given date is invalid', function() {
    var result = getQuarter(new JDate(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getQuarter.bind(null), TypeError)
  })
})
