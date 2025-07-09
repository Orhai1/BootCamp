//read a JSON file 
const fs = require('fs');
const data = fs.readFileSync('./users.json', 'utf-8');
const users = JSON.parse(data);

function printUserInfo(user) {
  console.log(`${user.name} lives in ${user.address.city}, and owns the company ${user.company.name}\n`);
}

users.forEach(printUserInfo);