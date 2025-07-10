class UniqueArray {
    constructor() {
        this.items = []
    }

    isEqualString(item1, item2) {
        return JSON.stringify(item1) === JSON.stringify(item2)
    }

    exists(item) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.isEqualString(this.items[i], item)) {
                return true
            }
        }
        return false
    }

    add(item) {
        if (!this.exists(item)) {
            this.items.push(item)
        }
    }

    showAll() {
        console.log(this.items)
    }

    get(index) {
        return this.items[index] !== undefined ? this.items[index] : -1
    }
}


const unique = new UniqueArray()

unique.add("hello")
unique.add({ x: 1 })
unique.add([1, 2, 3])
unique.add({ x: 1 }) 
unique.add([1, 2, 3]) 

unique.showAll()
// Output: [ "hello", { x: 1 }, [1, 2, 3] ]

console.log(unique.exists({ x: 1 })) // true
console.log(unique.get(1)) // { x: 1 }
