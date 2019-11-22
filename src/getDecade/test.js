// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getDecade from '.'
import JDate from '../jDate'

describe('getDecade', function() {
  it('returns the decade for a the given date', function() {
    var result = getDecade(
      new JDate({ year: 1399, month: 4 /* Mordad */, day: 12 })
    )
    assert(result === 1390)
  })

  it('accepts a timestamp', function() {
    var result = getDecade(
      new JDate({ year: 1362, month: 4 /* Mordad */, day: 12 }).getTime()
    )
    assert(result === 1360)
  })

  it('returns NaN if the given date is invalid', function() {
    var result = getDecade(new JDate(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getDecade.bind(null), TypeError)
  })
})
