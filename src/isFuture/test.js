// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import sinon from 'sinon'
import isFuture from '.'
import JDate from '../jDate'

describe('isFuture', () => {
  let clock
  beforeEach(() => {
    clock = sinon.useFakeTimers(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 22 }).getTime()
    )
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns true if the given date is in the future', () => {
    const result = isFuture(
      new JDate({ year: 1398, month: 9 /* Dey */, day: 2 })
    )
    assert(result === true)
  })

  it('returns false if the given date is in the past', () => {
    const result = isFuture(
      new JDate({ year: 1392, month: 8 /* Azar */, day: 22 })
    )
    assert(result === false)
  })

  it('returns false if the given date is now', () => {
    const result = isFuture(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 22 })
    )
    assert(result === false)
  })

  it('accepts a timestamp', () => {
    const result = isFuture(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 28 }).getTime()
    )
    assert(result === true)
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    assert.throws(isFuture.bind(null), TypeError)
  })
})
