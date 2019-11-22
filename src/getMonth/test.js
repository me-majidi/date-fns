// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getMonth from '.'
import JDate from '../jDate'

describe('getMonth', function() {
  it('returns the month of the given date', function() {
    var result = getMonth(
      new JDate({ year: 1399, month: 4 /* Mordad */, day: 12 })
    )
    assert(result === 4)
  })

  it('accepts a timestamp', function() {
    var result = getMonth(
      new JDate({ year: 1399, month: 8 /* Azar */, day: 12 }).getTime()
    )
    assert(result === 8)
  })

  it('returns NaN if the given date is invalid', function() {
    var result = getMonth(new JDate(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getMonth.bind(null), TypeError)
  })
})
