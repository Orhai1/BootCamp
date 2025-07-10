const StringFormatter = function () {
    
    const capitalizeFirst = function (str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase()
    }

    const toSkewerCase = function (str) {
        return str.replaceAll(' ', '-')
    }

    return {
        capitalizeFirst: capitalizeFirst,
        toSkewerCase: toSkewerCase
    }
}

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) // => Dorothy
console.log(formatter.toSkewerCase("blue box"))   // => blue-box
