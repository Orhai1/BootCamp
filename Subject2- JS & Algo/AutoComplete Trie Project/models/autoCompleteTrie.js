class AutoCompleteTrie {
    constructor(value = '') {
        this.value = value;
        this.children = {};
        this.endOfWord = false;
    }

    addWord(word) {
        let currentNode = this;
        for (let char of word.toLowerCase()) {
            if (!currentNode.children[char]) {
                currentNode.children[char] = new AutoCompleteTrie(char);
            }
            currentNode = currentNode.children[char];
        }
        currentNode.endOfWord = true;
    }

    findWord(word) {
        let currentNode = this;
        for (let char of word.toLowerCase()) {
            if (!currentNode.children[char]) {
                return false;
            }
            currentNode = currentNode.children[char];
        }
        return currentNode.endOfWord;
    }
}

module.exports = AutoCompleteTrie;
