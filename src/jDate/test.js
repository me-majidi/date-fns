import Jdate from '.'

// 7 Dec 2023 , 16 Aban 1402
const date = new Jdate()

console.log(date.getFullYear(), date.getMonth(), date.getDate())
console.log(date.toTimeString())
console.log(date.toDateString())
console.log(date.toString())
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())
