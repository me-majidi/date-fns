// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import sinon from 'sinon'
import startOfToday from '.'
import JDate from '../jDate'

describe('startOfToday', function() {
  let clock
  beforeEach(function() {
    clock = sinon.useFakeTimers(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 12 }).getTime()
    )
  })

  afterEach(function() {
    clock.restore()
  })

  it('returns the current date with the time setted to 00:00:00', function() {
    var result = startOfToday()
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 12 })
    )
  })
})
