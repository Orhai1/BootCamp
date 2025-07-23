const readline = require("readline");

function createInterface(onLineCallback) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: '> '
    });

    console.log("=== AutoComplete Trie Console ===");
    console.log("Type 'help' for commands\n");
    rl.prompt();

    rl.on("line", (line) => {
        onLineCallback(line.trim());
        rl.prompt();
    });

    return rl;
}

function showHelp() {
  console.log(`Commands:
  add <word>        - Add word to dictionary
  find <word>       - Check if word exists
  complete <prefix> - Get completions
  help              - Show this message
  exit              - Quit program`);
}

function showAddResult(word) {
    console.log(`Added '${word}' to dictionary`);
}

function showFindResult(word, found) {
    if (found) {
        console.log(`'${word}' exists in dictionary`);
    } else {
        console.log(`'${word}' not found in dictionary`);
    }
}

function showCompletions(prefix, completions) {
    if (completions.length === 0) {
        console.log(`No suggestions for '${prefix}'`);
    } else {
        console.log(`Suggestions for '${prefix}': ${completions.join(", ")}`);
    }
}

function showExit() {
    console.log('Goodbye!')
}

module.exports = {
    createInterface,
    showHelp,
    showAddResult,
    showFindResult,
    showCompletions,
    showExit
};
