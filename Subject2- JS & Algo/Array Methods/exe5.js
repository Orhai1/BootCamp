//read a JSON file 
const fs = require('fs');
const data = fs.readFileSync('./users.json', 'utf-8');
const users = JSON.parse(data);

const allInSouthChristy = users.every(user => user.address.city === 'South Christy');

console.log(allInSouthChristy);