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

    _getRemainingTree(prefix, node = this) {
        let currentNode = node;
        for (let char of prefix.toLowerCase()) {
            if (!currentNode.children[char]) {
                return null;
            }
            currentNode = currentNode.children[char];
        }
        return currentNode;
    }

    _allWordsHelper(prefix, node, allWords) {
        if (node.endOfWord) {
            allWords.push(prefix);
        }

        for (let char in node.children) {
            this._allWordsHelper(prefix + char, node.children[char], allWords);
        }
    }
}

module.exports = AutoCompleteTrie;
