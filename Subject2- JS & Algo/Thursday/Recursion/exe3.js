function swap(arr1, arr2) {
    if (arr1.length === 0) return;

    // take the first element from arr1 
    const val = arr1.shift(); 
    arr2.push(val);          

    swap(arr1, arr2);         
}

const arr1 = [1, 2, 3]
const arr2 = []
swap(arr1, arr2)
console.log(arr1) //[]
console.log(arr2) //[1, 2, 3]
