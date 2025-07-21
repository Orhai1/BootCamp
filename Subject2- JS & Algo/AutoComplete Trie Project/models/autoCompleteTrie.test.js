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
