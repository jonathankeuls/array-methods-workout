
// filter() gör inte om en array utan den filterer den och skickar tillbaka en ny array bara med de element som passerar functionen
const names = ['Gustav', 'Anders', 'Karl', 'Adrian', 'Erik']

const filteredNames = names.filter(name => name.length === 6)

console.log(filteredNames)