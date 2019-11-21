// @flow
/* eslint-env mocha */

import assert from 'assert'
import sinon from 'sinon'
import startOfTomorrow from '.'
import JDate from '../jDate'

describe('startOfTomorrow', function() {
  it('returns the start of tomorrow', function() {
    const clock = sinon.useFakeTimers(
      new JDate({ year: 1398, month: 8 /* Azar */, day: 12 }).getTime()
    )

    const result = startOfTomorrow()
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 13 })
    )

    clock.restore()
  })
})
