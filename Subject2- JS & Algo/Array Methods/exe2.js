//read a JSON file 
const fs = require('fs');
const data = fs.readFileSync('./users.json', 'utf-8');
const users = JSON.parse(data);

const filteredUsers = users.filter(user => user.address.zipcode[0] === '5');
filteredUsers.forEach(user => {
  console.log(`ID: ${user.id}, ZIP: ${user.address.zipcode}`);
});
