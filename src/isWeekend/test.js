// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isWeekend from '.'
import JDate from '../jDate'

describe('isWeekend', function() {
  it('returns true if the given date is in a weekend', function() {
    var result = isWeekend(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 8 })
    )
    assert(result === true)
  })

  it('returns false if the given date is not in a weekend', function() {
    var result = isWeekend(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 11 })
    )
    assert(result === false)
  })

  it('accepts a timestamp', function() {
    var result = isWeekend(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 21 }).getTime()
    )
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', function() {
    var result = isWeekend(new JDate(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(isWeekend.bind(null), TypeError)
  })
})
