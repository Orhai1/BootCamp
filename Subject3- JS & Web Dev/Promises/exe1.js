function checkLuckyNumber(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num <= 0) {
                reject(new Error("Invalid number"))
            } else if (num % 7 === 0) {
                resolve("Lucky!")
            } else {
                resolve("Not lucky")
            }
        }, 800)
    })
}

//test
checkLuckyNumber(14)
    .then(result => console.log(result))   // Lucky!
    .catch(error => console.log(error.message))

checkLuckyNumber(5)
    .then(result => console.log(result))   // Not lucky
    .catch(error => console.log(error.message))

checkLuckyNumber(-3)
    .then(result => console.log(result))
    .catch(error => console.log(error.message))  // Invalid number
