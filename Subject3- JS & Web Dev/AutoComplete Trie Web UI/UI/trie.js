import AutoCompleteTrie from "../models/autoCompleteTrie.js";
const trie = new AutoCompleteTrie();

const wordInput = document.getElementById('input');
const addBtn = document.getElementById('add-btn');
const addMsg = document.getElementById('add-msg');
const searching = document.getElementById('search');
const suggestionsBox = document.getElementById('suggestions');
const wordCount = document.getElementById('word-count');

//Adding words
addBtn.addEventListener('click', () => {
  const word = wordInput.value.trim().toLowerCase();

  if (word === "") {
    addMsg.innerHTML = 'Cannot add empty word';
    addMsg.className = 'error';
    return;
  }

  trie.addWord(word);
  wordInput.value = "";
  addMsg.innerHTML = 'Added ' + word + ' to dictionary';
  addMsg.className = 'success';
  wordCount.textContent = trie.getWordCount();
});

// Searching for predictions
searching.addEventListener('input', () => {
  const prefix = searching.value.trim().toLowerCase();
  const suggestions = trie.predictWords(prefix);

  suggestionsBox.innerHTML = '';
  if (prefix === "" || suggestions.length === 0) {
    suggestionsBox.style.display = 'none';
    return;
  }

  // Display suggestions
  suggestions.forEach(s => {
    const div = document.createElement('div');
    div.textContent = s;
    div.onclick = () => {
      searching.value = s;
      suggestionsBox.style.display = 'none';
    };
    suggestionsBox.appendChild(div);
  });

  suggestionsBox.style.display = 'block';
});