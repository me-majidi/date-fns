// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import JDate from './index'

describe('JDate', function() {
  it('setDate: positive number smaller than one month', function() {
    const date = new JDate({ year: 1398, month: 7, day: 24 }) // 24 Aban 1398

    date.setDate(1)
    assert.equal(date.toLocaleDateString(), '1398/8/1')
  })

  it('setDate: positive number bigger than one month', function() {
    const date = new JDate({ year: 1398, month: 7, day: 24 }) // 24 Aban 1398

    date.setDate(37)
    assert.equal(date.toLocaleDateString(), '1398/9/7')
  })

  it('setDate: positive number bigger than two month', function() {
    const date = new JDate({ year: 1398, month: 7, day: 24 }) // 24 Aban 1398

    date.setDate(83)
    assert.equal(date.toLocaleDateString(), '1398/10/23')
  })

  it('setDate: positive number bigger that goes to next year', function() {
    const date = new JDate({ year: 1398, month: 7, day: 24 }) // 24 Aban 1398

    date.setDate(152)
    assert.equal(date.toLocaleDateString(), '1399/1/3')
  })

  it('setDate: pass 0 as date', function() {
    const date = new JDate({ year: 1398, month: 7, day: 24 }) // 24 Aban 1398

    date.setDate(0)
    assert.equal(date.toLocaleDateString(), '1398/7/30')
  })

  it('setDate: pass negative number', function() {
    const date = new JDate({ year: 1398, month: 7, day: 24 }) // 24 Aban 1398

    date.setDate(-2)
    assert.equal(date.toLocaleDateString(), '1398/7/29')
  })

  it('setDate: pass negative number', function() {
    const date = new JDate({ year: 1398, month: 0, day: 2 }) // 2 Farvardin 1398

    date.setDate(-4)
    assert.equal(date.toLocaleDateString(), '1397/12/26')
  })

  it('setDate: pass negative number', function() {
    const date = new JDate({ year: 1398, month: 7, day: 24 }) // 24 Aban 1398

    date.setDate(-30)
    assert.equal(date.toLocaleDateString(), '1398/7/1')
  })

  it('setDate: pass negative number which goes 2months ago', function() {
    const date = new JDate({ year: 1398, month: 7, day: 24 }) // 24 Aban 1398

    date.setDate(-95)
    assert.equal(date.toLocaleDateString(), '1398/4/29')
  })

  it('setMonth: pass positive number smaller than one year', function() {
    const date = new JDate({ year: 1398, month: 7, day: 24 }) // 24 Aban 1398

    date.setMonth(11)
    assert.equal(date.toLocaleDateString(), '1398/12/24')
  })

  it('setMonth: pass positive number bigger than one year', function() {
    const date = new JDate({ year: 1398, month: 7, day: 24 }) // 24 Aban 1398

    date.setMonth(25)
    assert.equal(date.toLocaleDateString(), '1400/2/24')
  })

  it('setMonth: pass negative number', function() {
    const date = new JDate({ year: 1398, month: 7, day: 24 }) // 24 Aban 1398

    date.setMonth(-25)
    assert.equal(date.toLocaleDateString(), '1395/12/24')
  })
})
