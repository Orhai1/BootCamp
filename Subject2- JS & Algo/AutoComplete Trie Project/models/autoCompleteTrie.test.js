const AutoCompleteTrie = require('../models/AutoCompleteTrie');

describe('AutoCompleteTrie addWord', () => {
    let trie;

    beforeEach(() => {
        trie = new AutoCompleteTrie();
    });

    test('should add a single word to the trie', () => {
        trie.addWord('cat');
        expect(trie.children['c']).toBeDefined();
        expect(trie.children['c'].children['a']).toBeDefined();
        expect(trie.children['c'].children['a'].children['t']).toBeDefined();
        expect(trie.children['c'].children['a'].children['t'].endOfWord).toBe(true);
    });

    test('should reuse existing nodes when adding similar words', () => {
        trie.addWord('cat');
        trie.addWord('car');
        expect(trie.children['c']).toBeDefined();
        expect(trie.children['c'].children['a']).toBeDefined();
        expect(trie.children['c'].children['a'].children['t']).toBeDefined();
        expect(trie.children['c'].children['a'].children['r']).toBeDefined();
    });

    test('should handle uppercase by converting to lowercase', () => {
        trie.addWord('Dog');
        expect(trie.children['d']).toBeDefined();
        expect(trie.children['d'].children['o']).toBeDefined();
        expect(trie.children['d'].children['o'].children['g']).toBeDefined();
    });
});

describe('AutoCompleteTrie findWord', () => {
    let trie;

    beforeEach(() => {
        trie = new AutoCompleteTrie();
        trie.addWord('cat');
        trie.addWord('car');
        trie.addWord('card');
    });

    test('should return true for an exact word in the trie', () => {
        expect(trie.findWord('cat')).toBe(true);
        expect(trie.findWord('car')).toBe(true);
        expect(trie.findWord('card')).toBe(true);
    });

    test('should return false for word not in the trie', () => {
        expect(trie.findWord('can')).toBe(false);
        expect(trie.findWord('cart')).toBe(false);
    });

    test('should return false for a prefix that is not a full word', () => {
        expect(trie.findWord('ca')).toBe(false);
    });

    test('should be case insensitive (convert to lowercase)', () => {
        expect(trie.findWord('CAT')).toBe(true);
        expect(trie.findWord('Car')).toBe(true);
        expect(trie.findWord('cArD')).toBe(true);
    });
});

describe('AutoCompleteTrie helper methods', () => {
    let trie;

    beforeEach(() => {
        trie = new AutoCompleteTrie();
        trie.addWord('cat');
        trie.addWord('car');
        trie.addWord('card');
        trie.addWord('dog');
    });

    test('_getRemainingTree should return correct subtree for prefix', () => {
        const subtree = trie._getRemainingTree('ca');
        expect(subtree).not.toBeNull();
        expect(subtree.children['t']).toBeDefined();
        expect(subtree.children['r']).toBeDefined();
    });

    test('_getRemainingTree should return null for unknown prefix', () => {
        const subtree = trie._getRemainingTree('xyz');
        expect(subtree).toBeNull();
    });

    test('_allWordsHelper should collect all words from given node', () => {
        const subtree = trie._getRemainingTree('ca');
        const allWords = [];
        trie._allWordsHelper('ca', subtree, allWords);
        expect(allWords.sort()).toEqual(['car', 'card', 'cat'].sort());
    });

    test('_allWordsHelper should work on root to get all words', () => {
        const allWords = [];
        trie._allWordsHelper('', trie, allWords);
        expect(allWords.sort()).toEqual(['cat', 'car', 'card', 'dog'].sort());
    });
});