//read a JSON file 
const fs = require('fs');
const data = fs.readFileSync('./users.json', 'utf-8');
const users = JSON.parse(data);

const namesStartingWithC = users
  .map(user => user.name)
  .filter(name => name[0] === 'C');

console.log(namesStartingWithC);