// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isFriday from '.'
import JDate from '../jDate'

describe('isFriday', function() {
  it('returns true if the given date is Friday', function() {
    var result = isFriday(
      new JDate({ year: 1398, month: 5 /* Shahrivar */, day: 15 })
    )
    assert(result === true)
  })

  it('returns false if the given date is not Friday', function() {
    var result = isFriday(
      new JDate({ year: 1398, month: 5 /* Shahrivar */, day: 3 })
    )
    assert(result === false)
  })

  it('accepts a timestamp', function() {
    var result = isFriday(
      new JDate({ year: 1398, month: 5 /* Shahrivar */, day: 15 }).getTime()
    )
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', function() {
    var result = isFriday(new Date(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(isFriday.bind(null), TypeError)
  })
})
