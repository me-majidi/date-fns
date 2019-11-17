// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import lastDayOfWeek from '.'
import JDate from '../jDate'

describe('lastDayOfWeek', function() {
  it('returns the date with the time set to 00:00:00 and the date set to the last day of a week', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 12 })
    var result = lastDayOfWeek(date)

    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 15 })
    )
  })

  it('allows to specify which day is the first day of the week', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 12 })
    var result = lastDayOfWeek(date, { weekStartsOn: 0 })
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 16 })
    )
  })

  it('allows to specify which day is the first day of the week in locale', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 12 })
    var result = lastDayOfWeek(date, {
      // $ExpectedMistake
      locale: {
        options: { weekStartsOn: 0 }
      }
    })
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 16 })
    )
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 12 })
    var result = lastDayOfWeek(date, {
      weekStartsOn: 2,
      // $ExpectedMistake
      locale: {
        options: { weekStartsOn: 0 }
      }
    })
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 18 })
    )
  })

  it('implicitly converts options', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 12 })
    // $ExpectedMistake
    var result = lastDayOfWeek(date)
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 15 })
    )
  })

  it('accepts a timestamp', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 12 }).getTime()
    var result = lastDayOfWeek(date)
    assert.deepEqual(
      result,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 15 })
    )
  })

  it('does not mutate the original date', function() {
    var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 12 })
    lastDayOfWeek(date)
    assert.deepEqual(
      date,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 12 })
    )
  })

  describe('edge cases', function() {
    context('when the given day is before the start of a week', function() {
      it('it returns the last day of a week', function() {
        var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 7 })
        var result = lastDayOfWeek(date)

        assert.deepEqual(
          result,
          new JDate({ year: 1398, month: 8 /* Azar */, day: 8 })
        )
      })
    })

    context('when the given day is the start of a week', function() {
      it('it returns the last day of a week', function() {
        var date = new JDate({ year: 1398, month: 8 /* Azar */, day: 9 })
        var result = lastDayOfWeek(date)

        assert.deepEqual(
          result,
          new JDate({ year: 1398, month: 8 /* Azar */, day: 15 })
        )
      })
    })

    context('when the given day is after the start of a week', function() {
      it('it returns the last day of a week', function() {
        var date = new Date(2014, 9 /* Oct */, 10)
        var result = lastDayOfWeek(date, { weekStartsOn: 3 })
        assert.deepEqual(result, new Date(2014, 9 /* Oct */, 14))
      })
    })

    it('handles the week at the end of a year', function() {
      var date = new Date(2014, 11 /* Dec */, 29)
      var result = lastDayOfWeek(date, { weekStartsOn: 5 })
      assert.deepEqual(result, new Date(2015, 0 /* Jan */, 1))
    })
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = lastDayOfWeek(new JDate(NaN))
    assert(result instanceof Date && isNaN(result))
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function() {
    var block = lastDayOfWeek.bind(
      null,
      new JDate({ year: 1398, month: 8 /* Azar */, day: 12 }),
      // $ExpectedMistake
      { weekStartsOn: NaN }
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(lastDayOfWeek.bind(null), TypeError)
  })
})
