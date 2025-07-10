class UniqueArray {
    constructor() {
        this.items = []
        this.itemsMap = {}
    }

    add(item) {
        if (this.itemsMap[item] === undefined) {
            this.items.push(item)
            this.itemsMap[item] = true
        }
    }

    showAll() {
        console.log(this.items)
    }

    exists(item) {
        return this.itemsMap[item] !== undefined
    }

    get(index) {
        return this.items[index] !== undefined ? this.items[index] : -1
    }
}
