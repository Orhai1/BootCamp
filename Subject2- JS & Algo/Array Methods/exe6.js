//read a JSON file 
const fs = require('fs');
const data = fs.readFileSync('./users.json', 'utf-8');
const users = JSON.parse(data);

const user = users.find(user => user.address.suite === 'Apt. 950');
console.log(user.company.name);