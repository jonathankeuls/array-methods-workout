
// some() metoden testar om minst ett element i arrayen passerar den givna functionen
const numbers = [1, 6, 9, 3, 5, 7, 7, 5, 3, 8, 9, 5, 7]

const isFive = (num) => num === 5
const isTwo = (num) => num === 2

console.log(numbers.some(isFive))
console.log(numbers.some(isTwo))