let employeesArr = [
  { name: "Joey", id: 1, age: 26 },
  { name: "Lily", id: null, age: 24 },
  { name: "Alice", id: 7, age: null },
  { name: "Sam", id: 8, age: 24 },
  { name: "Ray", id: null, age: null }
];


for (let employee of employeesArr) {
  let id = employee.id ?? null;
  let age = employee.age ?? null;

  if (id === null || age === null) {
    console.log(employee.name);
  }
}
