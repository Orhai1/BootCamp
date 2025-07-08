const isEven = function(num) {
  return num % 2 === 0
}

const printOddNumbers = function(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (!isEven(numbers[i])) {
      console.log(numbers[i])
    }
  }
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printOddNumbers(numbers);