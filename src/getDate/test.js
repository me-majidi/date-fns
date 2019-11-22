// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getDate from '.'
import JDate from '../jDate'

describe('getDate', function() {
  it('returns the day of the month of the given date', function() {
    var result = getDate(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 12 })
    )
    assert(result === 12)
  })

  it('accepts a timestamp', function() {
    var result = getDate(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 12 }).getTime()
    )
    assert(result === 12)
  })

  it('returns NaN if the given date is invalid', function() {
    var result = getDate(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getDate.bind(null), TypeError)
  })
})
