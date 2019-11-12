import JDate from '.'
import isToday from '../isToday'
import isWednesday from '../isWednesday'
import isThursday from '../isThursday'
import formatDistance from '../formatDistance'

// 7 Dec 2023 , 16 Aban 1402
const date = new JDate(2023, 11, 7)

console.log(date.getFullYear(), date.getMonth(), date.getDate())
console.log(date.toTimeString())
console.log(date.toDateString())
console.log(date.toString())
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())
console.log(isToday(date))
console.log(isWednesday(date))
console.log(isThursday(date))

console.log(formatDistance(date, new JDate(), {}))
