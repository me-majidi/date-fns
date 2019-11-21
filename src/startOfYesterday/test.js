// @flow
/* eslint-env mocha */

import assert from 'assert'
import sinon from 'sinon'
import startOfYesterday from '.'
import JDate from '../jDate'

describe('startOfYesterday', function() {
  it('returns the start of yesterday', function() {
    const clock = sinon.useFakeTimers(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 22 }).getTime()
    )

    const result = startOfYesterday()
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 21 })
    )

    clock.restore()
  })
})
