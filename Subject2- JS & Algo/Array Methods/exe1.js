//read a JSON file 
const fs = require('fs');
const data = fs.readFileSync('./users.json', 'utf-8');
const users = JSON.parse(data);

const result = users.map(user => {
  return {
    email: user.email,
    companyName: user.company.name
  };
});

console.log(result);
