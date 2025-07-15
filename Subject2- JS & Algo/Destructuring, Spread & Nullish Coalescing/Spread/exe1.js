let meatArr = ["beef","chicken"]
let vegetableArr = ["rabbit","carrots","potatoes","lettuce"]


let [rabbit, ...correctVeggies] = vegetableArr;
let correctedMeatArr = [...meatArr, rabbit];
let correctedVegetableArr = [...correctVeggies];

console.log(correctedMeatArr);      
console.log(correctedVegetableArr); 
