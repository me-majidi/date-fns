// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import closestTo from '.'
import JDate from '../jDate'

describe('closestTo', function() {
  it('returns the date from the given array closest to the given date', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 22 })
    var result = closestTo(date, [
      new JDate({ year: 1398, month: 8 /* Azar */, day: 25 }),
      new JDate({ year: 1398, month: 4 /* Mordad */, day: 22 })
    ])
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 25 })
    )
  })

  it('works if the closest date from the given array is before the given date', function() {
    var date = new JDate({
      year: 1398,
      month: 8 /* Azar */,
      day: 19,
      h: 5,
      m: 5,
      ms: 200
    })
    var result = closestTo(date, [
      new JDate({
        year: 1398,
        month: 8 /* Azar */,
        day: 19,
        h: 5,
        m: 5,
        ms: 400
      }),
      new JDate({
        year: 1398,
        month: 8 /* Azar */,
        day: 19,
        h: 3,
        m: 2,
        ms: 200
      }),
      new JDate({ year: 1398, month: 8 /* Azar */, day: 19, h: 6, m: 6, ms: 0 })
    ])
    assert.deepEqual(
      result,
      new JDate({
        year: 1398,
        month: 8 /* Azar */,
        day: 19,
        h: 5,
        m: 5,
        ms: 400
      })
    )
  })

  it('accepts timestamps', function() {
    var date = new Date(2014, 6 /* Jul */, 2).getTime()
    var result = closestTo(date, [
      new Date(2015, 7 /* Aug */, 31).getTime(),
      new Date(2012, 6 /* Jul */, 2).getTime()
    ])
    assert.deepEqual(result, new Date(2015, 7 /* Aug */, 31))
  })

  it('returns undefined if the given array is empty', function() {
    var date = new Date(2014, 6 /* Jul */, 2).getTime()
    var result = closestTo(date, [])
    assert(result == null)
  })

  it('returns `Invalid Date` if the given date is `Invalid Date`', function() {
    var date = new Date(NaN)
    var result = closestTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(2012, 6 /* Jul */, 2)
    ])
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if any date in the given array is `Invalid Date`', function() {
    var date = new Date(2014, 6 /* Jul */, 2)
    var result = closestTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(NaN),
      new Date(2012, 6 /* Jul */, 2)
    ])
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if any date in the given array is `Invalid Date`', function() {
    var date = new Date(2014, 6 /* Jul */, 2)
    var result = closestTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(NaN),
      new Date(2012, 6 /* Jul */, 2)
    ])
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if any value in the given array is undefined', function() {
    var date = new Date(2014, 6 /* Jul */, 2)
    var result = closestTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      // $ExpectedMistake
      undefined,
      new Date(2012, 6 /* Jul */, 2)
    ])
    assert(result instanceof Date && isNaN(result))
  })

  it('converts Array-like objects into Array', function() {
    var date = new Date(2014, 6 /* Jul */, 2)
    var object = {
      '0': new Date(2015, 7 /* Aug */, 31),
      '1': new Date(2012, 6 /* Jul */, 2),
      length: 2
    }
    // $ExpectedMistake
    var result = closestTo(date, object)
    assert.deepEqual(result, new Date(2015, 7 /* Aug */, 31))
  })

  it('converts undefined into empty array', function() {
    var date = new Date(2014, 6 /* Jul */, 2).getTime()
    // $ExpectedMistake
    var result = closestTo(date, undefined)
    assert(result == null)
  })

  it('converts null into empty array', function() {
    var date = new Date(2014, 6 /* Jul */, 2).getTime()
    // $ExpectedMistake
    var result = closestTo(date, null)
    assert(result == null)
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(closestTo.bind(null), TypeError)
    assert.throws(closestTo.bind(null, 1), TypeError)
  })
})
