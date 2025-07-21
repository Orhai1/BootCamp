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
