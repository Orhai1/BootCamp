function findFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * findFactorial(n - 1);
}
console.log(findFactorial(5)) 
console.log(findFactorial(0)) 
console.log(findFactorial(3)) 
