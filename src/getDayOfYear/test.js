// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getDayOfYear from '.'
import JDate from '../jDate'

describe('getDayOfYear', function() {
  it('returns the day of the year of the given date', function() {
    var result = getDayOfYear(
      new JDate({ year: 1398, month: 4 /* Mordad */, day: 12 })
    )
    assert(result === 136)
  })

  it('accepts a timestamp', function() {
    var result = getDayOfYear(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 22 }).getTime()
    )
    assert(result === 268)
  })

  it('returns NaN if the given date is invalid', function() {
    var result = getDayOfYear(new JDate(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getDayOfYear.bind(null), TypeError)
  })
})
