import JDate from '.'
import isToday from '../isToday'
import isWednesday from '../isWednesday'
import isThursday from '../isThursday'
import formatDistance from '../formatDistance'

const date = new JDate(2021, 2, 20)
console.log(date.toString())
date.setFullYear(1398)
console.log(date.toString())

// console.log(date.getFullYear(), date.getMonth(), date.getDate())
// console.log(date.toTimeString())
// console.log(date.toString())
// console.log(date.toString())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleTimeString())
// console.log(isToday(date))
// console.log(isWednesday(date))
// console.log(isThursday(date))

// console.log(formatDistance(date, new JDate(), {}))

//
//
// date.setFullYear(1399);
// console.log(date.toString());
// date.setFullYear(1400, 1);
// console.log(date.toString());
// date.setFullYear(1398);
// date.setMonth(8);
// console.log(date.toString());
// date.setMonth(11);
// console.log(date.toString());
// date.setDate(18);
// console.log(date.toString());
// date.setFullYear()
