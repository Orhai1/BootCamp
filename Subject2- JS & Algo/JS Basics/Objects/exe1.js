let p1 = {
  name: "Jill",
  age: 25,
  city: "Tel Aviv"
};

let p2 = {
  name: "Robert",
  age: 25,
  city: "Tel Aviv"
};

if (p1.age === p2.age) {
  if (p1.city === p2.city) {
    console.log("Jill wanted to date Robert");
  } else {
    console.log("Jill wanted to date Robert, but couldn't");
  }
}
