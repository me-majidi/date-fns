// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setSeconds from '.'
import JDate from '../jDate'

describe('setSeconds', function() {
  it('sets the seconds', function() {
    var date = new JDate({
      year: 1398,
      month: 8 /* Azar */,
      day: 12,
      h: 11,
      m: 40,
      s: 40,
      ms: 500
    })
    var result = setSeconds(date, 45)

    assert.deepEqual(
      result,
      new JDate({
        year: 1398,
        month: 8 /* Azar */,
        day: 12,
        h: 11,
        m: 40,
        s: 45,
        ms: 500
      })
    )
  })

  it('accepts a timestamp', function() {
    var result = setSeconds(
      new JDate({
        year: 1398,
        month: 8 /* Azar */,
        day: 12,
        h: 11,
        m: 40,
        s: 40
      }).getTime(),
      45
    )
    assert.deepEqual(
      result,
      new JDate({
        year: 1398,
        month: 8 /* Azar */,
        day: 12,
        h: 11,
        m: 40,
        s: 45
      })
    )
  })

  it('converts a fractional number to an integer', function() {
    var result = setSeconds(
      new JDate({
        year: 1398,
        month: 8 /* Azar */,
        day: 12,
        h: 11,
        m: 40,
        s: 40
      }),
      45.54
    )
    assert.deepEqual(
      result,
      new JDate({
        year: 1398,
        month: 8 /* Azar */,
        day: 12,
        h: 11,
        m: 40,
        s: 45
      })
    )
  })

  it('implicitly converts number arguments', function() {
    var result = setSeconds(
      new JDate({
        year: 1398,
        month: 8 /* Azar */,
        day: 12,
        h: 11,
        m: 40,
        s: 40
      }),
      // $ExpectedMistake
      '45'
    )
    assert.deepEqual(
      result,
      new JDate({
        year: 1398,
        month: 8 /* Azar */,
        day: 12,
        h: 11,
        m: 40,
        s: 45
      })
    )
  })

  it('does not mutate the original date', function() {
    var date = new JDate({
      year: 1398,
      month: 8 /* Azar */,
      day: 12,
      h: 11,
      m: 40,
      s: 45
    })
    setSeconds(date, 15)
    assert.deepEqual(
      date,
      new JDate({
        year: 1398,
        month: 8 /* Azar */,
        day: 12,
        h: 11,
        m: 40,
        s: 45
      })
    )
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = setSeconds(new JDate(NaN), 45)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    var result = setSeconds(
      new JDate({
        year: 1398,
        month: 8 /* Azar */,
        day: 12,
        h: 11,
        m: 40,
        s: 45
      }),
      NaN
    )
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(setSeconds.bind(null), TypeError)
    assert.throws(setSeconds.bind(null, 1), TypeError)
  })
})
