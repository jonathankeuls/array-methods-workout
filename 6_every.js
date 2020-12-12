
// every() fungerar som methoden some() men skillnaden är att every() testar om ALLA element passerar functionen. Då returnerar den true, annars false
const names = ['Karl', 'Jonas', 'Jakob', 'Åke']
const names2 = ['Jonas', 'Jonathan', 'Jack', 'Josef']

const beginsWithJ = (name) => name[0] === 'J'

console.log(names.every(beginsWithJ))
console.log(names2.every(beginsWithJ))
