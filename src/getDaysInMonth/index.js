import toDate from '../toDate/index.js'
import { jalaaliMonthLength } from '../_lib/jalali'

/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the number of days in a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // How many days are in February 2000?
 * var result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
export default function getDaysInMonth(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError(
      '1 argument required, but only ' + arguments.length + ' present'
    )
  }

  var date = toDate(dirtyDate)

  if (isNaN(date)) {
    return NaN
  }

  var year = date.getFullYear()
  var monthIndex = date.getMonth()
  return jalaaliMonthLength(year, monthIndex + 1)
}
