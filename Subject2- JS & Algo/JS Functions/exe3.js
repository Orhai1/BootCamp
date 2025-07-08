const checkExists = function(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return true
    }
  }
  return false
}
const numbers = [1, 2, 3, 4, 6, 7, 8, 9, 10];
const numberToCheck = 5;

console.log(checkExists(numbers, numberToCheck)); 
