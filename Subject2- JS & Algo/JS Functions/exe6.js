const isArmstrong = function(num) {
  let strNum = "" + num 
  let digits = strNum.length
  let sum = 0

  for (let i = 0; i < digits; i++) {
    let digit = Number(strNum[i])
    sum += digit ** digits
  }

  return sum === num
}

const numberToCheck = 153
console.log(isArmstrong(numberToCheck)); 
