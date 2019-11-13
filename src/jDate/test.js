// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import JDate from './index'

describe('JDate', function() {
  it('getFullYear', function() {
    const date = new JDate(2015, 5, 23) // 2 Tir 1394
    assert.equal(date.getFullYear(), 1394)
  })

  it('getMonth', function() {
    const date = new JDate(2015, 5, 23) // 2 Tir 1394
    assert.equal(date.getMonth(), 3)
  })

  it('getDate', function() {
    const date = new JDate(2015, 5, 23) // 2 Tir 1394
    assert.equal(date.getDate(), 2)
  })
})
