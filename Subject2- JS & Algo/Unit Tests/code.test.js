const Exercises = require('./code')

//Ex 1
test("isEven should return true for even numbers", () => {
  const ex = new Exercises()
  expect(ex.isEven(4)).toBeTruthy()
})

test("isEven should return false for odd numbers", () => {
  const ex = new Exercises()
  expect(ex.isEven(5)).toBeFalsy()
})

// //extra ex 1
// test("isEven should return false when called with non-number(string)", () => {
//     const ex = new Exercises()
//     expect(ex.isEven("2")).toBeFalsy() 
// })

//Ex 2
test("removeAtLeastOne should remove at least one element from array", () => {
    const ex = new Exercises()
    const originalArray = [1, 2, 3, 4, 5]
    const result = ex.removeAtLeastOne([...originalArray])

    expect(result.length).toBeLessThan(originalArray.length)
})
//extra ex 2
test("removeAtLeastOne should handle empty array", () => {
    const ex = new Exercises()
    const result = ex.removeAtLeastOne([])
    expect(result.length).toBe(0)
})

//Ex 3
test("simplify should remove special characters from string", () => {
    const ex = new Exercises()
    const messyStr = `he!l.lo, #wor"ld'`
    const cleanStr = ex.simplify(messyStr)
    expect(cleanStr).toBe('hello wor"ld')
})
//extra ex 3
test("simplify should return empty string when input is empty", () => {
    const ex = new Exercises()
    expect(ex.simplify("")).toBe("")
})

//Ex 4
test("validate should return error when no booleans", () => {
    const ex = new Exercises()
    const result = ex.validate(["hello", 1, null])
    expect(result).toEqual({ error: "Need at least one boolean" })
})

test("validate should return true when more trues than falses", () => {
    const ex = new Exercises()
    const result = ex.validate([true, true, false])
    expect(result).toBe(true)
})

test("validate should return false when trues are equal to or fewer than falses", () => {
    const ex = new Exercises()
    const result = ex.validate([false, false, true])
    expect(result).toBe(false)
})
//extra ex 4
// test("validate should return error when input is not array", () => {
//     const ex = new Exercises()
//     expect(ex.validate("not-an-array")).toEqual({ error: "Need at least one boolean" })
// })
