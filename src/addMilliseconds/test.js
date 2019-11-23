// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import addMilliseconds from '.'
import JDate from '../jDate'

describe('addMilliseconds', function() {
  it('adds the given number of milliseconds', function() {
    var date = new JDate({
      year: 1398,
      month: 8 /* Azar */,
      day: 2,
      hours: 12,
      min: 45,
      sec: 30,
      ms: 0
    })
    var result = addMilliseconds(date, 750)
    assert.deepEqual(
      result,
      new JDate({
        year: 1398,
        month: 8 /* Azar */,
        day: 2,
        hours: 12,
        min: 45,
        sec: 30,
        ms: 750
      })
    )
  })

  it('accepts a timestamp', function() {
    var date = new JDate({
      year: 1398,
      month: 8 /* Azar */,
      day: 2,
      hours: 12,
      min: 45,
      sec: 30,
      ms: 0
    })
    var result = addMilliseconds(date, 500)
    assert.deepEqual(
      result,
      new JDate({
        year: 1398,
        month: 8 /* Azar */,
        day: 2,
        hours: 12,
        min: 45,
        sec: 30,
        ms: 500
      })
    )
  })

  it('converts a fractional number to an integer', function() {
    var date = new JDate({
      year: 1398,
      month: 8 /* Azar */,
      day: 2,
      hours: 12,
      min: 45,
      sec: 30,
      ms: 0
    })
    var result = addMilliseconds(date, 750.75)
    assert.deepEqual(
      result,
      new JDate({
        year: 1398,
        month: 8 /* Azar */,
        day: 2,
        hours: 12,
        min: 45,
        sec: 30,
        ms: 750
      })
    )
  })

  it('implicitly converts number arguments', function() {
    var date = new JDate({
      year: 1398,
      month: 8 /* Azar */,
      day: 2,
      hours: 12,
      min: 45,
      sec: 30,
      ms: 5
    })
    var result = addMilliseconds(
      date,
      // $ExpectedMistake
      '750'
    )
    assert.deepEqual(
      result,
      new JDate({
        year: 1398,
        month: 8 /* Azar */,
        day: 2,
        hours: 12,
        min: 45,
        sec: 30,
        ms: 755
      })
    )
  })

  it('does not mutate the original date', function() {
    var date = new JDate({
      year: 1398,
      month: 8 /* Azar */,
      day: 2,
      hours: 12,
      min: 45,
      sec: 30,
      ms: 0
    })
    addMilliseconds(date, 250)
    assert.deepEqual(
      date,
      new JDate({
        year: 1398,
        month: 8 /* Azar */,
        day: 2,
        hours: 12,
        min: 45,
        sec: 30,
        ms: 0
      })
    )
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = addMilliseconds(new JDate(NaN), 750)
    assert(result instanceof JDate && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    var date = new JDate({
      year: 1398,
      month: 8 /* Azar */,
      day: 2,
      hours: 12,
      min: 45,
      sec: 30,
      ms: 0
    })
    var result = addMilliseconds(date, NaN)
    assert(result instanceof JDate && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(addMilliseconds.bind(null), TypeError)
    assert.throws(addMilliseconds.bind(null, 1), TypeError)
  })
})
