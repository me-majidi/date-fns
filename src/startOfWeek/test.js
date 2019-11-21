// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import startOfWeek from '.'
import JDate from '../jDate'

describe('startOfWeek', function() {
  it('returns the date with the time set to 00:00:00 and the date set to the first day of a week', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 5 })
    var result = startOfWeek(date)
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 2 })
    )
  })

  it('allows to specify which day is the first day of the week', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 5 })
    var result = startOfWeek(date, { weekStartsOn: 0 })
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 3 })
    )
  })

  it('allows to specify which day is the first day of the week in locale', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 5 })
    var result = startOfWeek(date, {
      // $ExpectedMistake
      locale: {
        options: { weekStartsOn: 1 }
      }
    })
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 4 })
    )
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 5 })
    var result = startOfWeek(date, {
      weekStartsOn: 1,
      // $ExpectedMistake
      locale: {
        options: { weekStartsOn: 0 }
      }
    })
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 4 })
    )
  })

  it('implicitly converts options', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 5 })
    // $ExpectedMistake
    var result = startOfWeek(date, { weekStartsOn: '1' })
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 4 })
    )
  })

  it('accepts a timestamp', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 5 }).getTime()
    var result = startOfWeek(date)
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 2 })
    )
  })

  it('does not mutate the original date', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 5 })
    startOfWeek(date)
    assert.deepEqual(
      date,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 5 })
    )
  })

  describe('edge cases', function() {
    context('when the given day is before the start of a week', function() {
      it('it returns the start of a week', function() {
        var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 15 })
        var result = startOfWeek(date)
        assert.deepEqual(
          result,
          new JDate({ year: 1398, month: 8 /* Azar */, day: 9 })
        )
      })
    })

    context('when the given day is the start of a week', function() {
      it('it returns the start of a week', function() {
        var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 23 })
        var result = startOfWeek(date)
        assert.deepEqual(
          result,
          new JDate({ year: 1398, month: 8 /* Azar */, day: 23 })
        )
      })
    })

    context('when the given day is after the start of a week', function() {
      it('it returns the start of a week', function() {
        var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 24 })
        var result = startOfWeek(date)
        assert.deepEqual(
          result,
          new JDate({ year: 1398, month: 8 /* Azar */, day: 23 })
        )
      })
    })

    it('handles the week at the start of a year', function() {
      var date = new JDate({ year: 1398, month: 0 /* Farvardin */, day: 2 })
      var result = startOfWeek(date)

      assert.deepEqual(
        result,
        new JDate({ year: 1397, month: 11 /* Esfand */, day: 25 })
      )
    })
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = startOfWeek(new Date(NaN))
    assert(result instanceof Date && isNaN(result))
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function() {
    var block = startOfWeek.bind(
      null,
      new JDate(2014, 8 /* Sep */, 2, 11, 55, 0),
      // $ExpectedMistake
      { weekStartsOn: NaN }
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(startOfWeek.bind(null), TypeError)
  })
})
