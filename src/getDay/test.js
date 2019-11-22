// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getDay from '.'
import JDate from '../jDate'

describe('getDay', function() {
  it('returns the day of the week of the given date', function() {
    var result = getDay(new JDate({ year: 1398, month: 8 /* Azar */, day: 12 }))
    assert(result === 2)
  })

  it('accepts a timestamp', function() {
    var result = getDay(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 22 }).getTime()
    )
    assert(result === 5)
  })

  it('returns NaN if the given date is invalid', function() {
    var result = getDay(new JDate(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getDay.bind(null), TypeError)
  })
})
