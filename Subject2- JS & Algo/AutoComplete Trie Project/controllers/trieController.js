const autoCompleteTrie = require('../models/AutoCompleteTrie');
const view = require('../views/trieView');

const trie = new autoCompleteTrie();

function handleCommand(input) {
    const [command, ...args] = input.trim().split(" ");
    const value = args.join(" ").toLowerCase();

    switch (command.toLowerCase()) {
        case 'add':
            if (value) {
                trie.addWord(value);
                view.showAddResult(value);
            } else {
                console.log('Please provide a word to add.');
            }
            break;

        case 'find':
            if (value) {
                const found = trie.findWord(value);
                view.showFindResult(value, found);
            } else {
                console.log('Please provide a word to find.');
            }
            break;

        case 'complete':
            if (value) {
                const results = trie.predictWords(value);
                view.showCompletions(value, results);
            } else {
                console.log('Please provide a prefix to complete.');
            }
            break;

        case 'help':
            view.showHelp();
            break;

        case 'exit':
            view.showExit();
            process.exit(0);

        default:
            console.log(`Unknown command: '${command}'`);
    }
}

module.exports = {
    handleCommand
};
