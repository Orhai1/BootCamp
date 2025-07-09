//read a JSON file 
const fs = require('fs');
const data = fs.readFileSync('./users.json', 'utf-8');
const users = JSON.parse(data);

const ids = users
  .filter(user => user.address.zipcode[0] === '5')
  .map(user => user.id);

console.log(ids);