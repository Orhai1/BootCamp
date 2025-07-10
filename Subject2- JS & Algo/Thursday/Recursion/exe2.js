function reverseString(str) {
    if (str === "") {
        return "";
    }

    return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello"))
console.log(reverseString("world"))