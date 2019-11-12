import { toJalaali } from '../_lib/jalali'

export default class Jdate extends Date {
  constructor() {
    super()

    if (arguments.length < 1) {
      throw new TypeError(
        '1 argument required, but only ' + arguments.length + ' present'
      )
    }

    const argStr = Object.prototype.toString.call(arguments[0])

    if (arguments.length > 1) {
      this._gDate = new Date(...arguments)
    } else if (
      arguments[0] instanceof Date ||
      (typeof argument === 'object' && argStr === '[object Date]')
    ) {
      // Prevent the date to lose the milliseconds when passed to new Date() in IE10
      this._gDate = new Date(arguments[0].getTime())
    } else if (
      typeof arguments[0] === 'number' ||
      argStr === '[object Number]'
    ) {
      this._gDate = new Date(arguments[0])
    } else {
      if (
        (typeof argument === 'string' || argStr === '[object String]') &&
        typeof console !== 'undefined'
      ) {
        // eslint-disable-next-line no-console
        console.warn(
          "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"
        )
        // eslint-disable-next-line no-console
        console.warn(new Error().stack)
      }
      this._gDate = new Date(NaN)
    }

    this.syncJalali()
  }

  syncJalali() {
    const { jy, jd, jm } = toJalaali(
      this._gDate.getFullYear(),
      this._gDate.getMonth() + 1,
      this._gDate.getDate()
    )

    this._jDate = {
      year: jy,
      month: jm - 1,
      day: jd
    }
  }

  getFullYear() {
    return this._jDate.year
  }

  getMonth() {
    return this._jDate.month
  }

  getDate() {
    return this._jDate.day
  }
}
