// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isMonday from '.'
import JDate from '../jDate'

describe('isMonday', function() {
  it('returns true if the given date is Monday', function() {
    var result = isMonday(
      new JDate({ year: 1399, month: 4 /* Mordad */, day: 6 })
    )
    assert(result === true)
  })

  it('returns false if the given date is not Monday', function() {
    var result = isMonday(
      new JDate({ year: 1399, month: 4 /* Mordad */, day: 9 })
    )
    assert(result === false)
  })

  it('accepts a timestamp', function() {
    var result = isMonday(
      new JDate({ year: 1399, month: 4 /* Mordad */, day: 6 }).getTime()
    )
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', function() {
    var result = isMonday(new Date(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(isMonday.bind(null), TypeError)
  })
})
