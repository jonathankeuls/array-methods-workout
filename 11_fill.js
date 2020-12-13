
// Man kan med denna metod fylla en array med önskade nummer
// I det första exemplet fyller vi med 8 från index 3
// I det andra exemplet fyller vi med 2 från index 2 till index 5
const numbers = [1, 2, 3, 4, 5, 6, 7]

console.log(numbers.fill(8, 3)) // [1, 2, 3, 8, 8, 8, 8]
console.log(numbers.fill(2, 2, 5)) // [1, 2, 2, 2, 2, 6, 7]
