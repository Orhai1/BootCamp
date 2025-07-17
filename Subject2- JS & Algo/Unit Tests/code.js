class Exercises {
    //Ex 1
    isEven(n) {
        return n % 2 == 0 ? true : false
    }

    //Ex 2
    //should remove at least one element from the array `arr`
    removeAtLeastOne(arr) {
        let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
        arr.splice(0, numItemsToRemove)
        return arr
    }
    //Ex 3
    //should return a clean string without these symbols: "!", "#", ".", ",", "'"
    simplify(str) {
        let symbols = ["!", "#", ".", ",", "'"]
        return str.split("").filter(c => symbols.indexOf(c) == -1).join("")
    }

    //Ex 4
    validate(arr) {
        const booleans = arr.filter(e => typeof e === "boolean")
        if (booleans.length === 0) {
            return { error: "Need at least one boolean" }
        }

        const trues = booleans.filter(b => b === true).length
        const falses = booleans.filter(b => b === false).length

        return trues > falses
    }

}

module.exports = Exercises
