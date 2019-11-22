// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isEqual from '.'
import JDate from '../jDate'

describe('isEqual', function() {
  it('returns true if the given dates are equal', function() {
    var result = isEqual(
      new JDate({ year: 1394, month: 5 /* Shahrivar */, day: 3 }),
      new JDate({ year: 1394, month: 5 /* Shahrivar */, day: 3 })
    )
    assert(result === true)
  })

  it('returns false if the given dates are not equal', function() {
    var result = isEqual(
      new JDate({ year: 1394, month: 5 /* Shahrivar */, day: 3 }),
      new JDate({ year: 1374, month: 6 /* Mehr */, day: 15 })
    )
    assert(result === false)
  })

  it('accepts a timestamp', function() {
    var result = isEqual(
      new JDate({ year: 1394, month: 5 /* Shahrivar */, day: 3 }).getTime(),
      new JDate({ year: 1394, month: 5 /* Shahrivar */, day: 3 }).getTime()
    )
    assert(result === true)
  })

  it('returns false if the first date is `Invalid Date`', function() {
    var result = isEqual(
      new JDate(NaN),
      new JDate({ year: 1394, month: 5 /* Shahrivar */, day: 3 })
    )
    assert(result === false)
  })

  it('returns false if the second date is `Invalid Date`', function() {
    var result = isEqual(
      new JDate({ year: 1394, month: 5 /* Shahrivar */, day: 3 }),
      new JDate(NaN)
    )
    assert(result === false)
  })

  it('returns false if the both dates are `Invalid Date`', function() {
    var result = isEqual(new JDate(NaN), new JDate(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(isEqual.bind(null), TypeError)
    assert.throws(isEqual.bind(null, 1), TypeError)
  })
})
