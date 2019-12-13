// @flow
/* eslint-env mocha */

import assert from 'assert'
import sinon from 'sinon'
import isPast from '.'
import JDate from '../jDate'

describe('isPast', () => {
  let clock
  beforeEach(() => {
    clock = sinon.useFakeTimers(
      new JDate({ year: 1399, month: 4 /* Mordad */, day: 6 }).getTime()
    )
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns true if the given date is in the past', () => {
    const result = isPast(
      new JDate({ year: 1395, month: 4 /* Mordad */, day: 6 })
    )
    assert(result === true)
  })

  it('returns false if the given date is in the future', () => {
    const result = isPast(
      new JDate({ year: 1399, month: 4 /* Mordad */, day: 12 })
    )
    assert(result === false)
  })

  it('returns false if the given date is now', () => {
    const result = isPast(
      new JDate({ year: 1399, month: 4 /* Mordad */, day: 6 })
    )
    assert(result === false)
  })

  it('accepts a timestamp', () => {
    const result = isPast(
      new JDate({ year: 1399, month: 4 /* Mordad */, day: 1 }).getTime()
    )
    assert(result === true)
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    assert.throws(isPast.bind(null), TypeError)
  })
})
