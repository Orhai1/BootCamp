const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())                

const wordCounter = Object.create(null);

app.get('/sanity', (req, res) => {
  res.send('Server is up and running');
});

app.get('/word/:word', (req, res) => {
  const word = String(req.params.word)
  if (!word) {
    return res.status(400).json({ error: 'word must be a single word' })
  }
  return res.json({ count: wordCounter[word] || 0 })
});

app.post('/word', (req, res) => {
  const { word } = req.body || {}
  if (!word ||  typeof word !== 'string') {
    return res.status(400).json({ error: 'word is required' })
  }
  wordCounter[word] = (wordCounter[word] || 0) + 1
  return res.status(201).json({ text: `Added ${word}`, currentCount: wordCounter[word] })
});


app.post('/sentence', (req, res) => {
  const { sentence } = req.body || {}
  if (!sentence || typeof sentence !== 'string') {
    return res.status(400).json({ error: 'sentence is required (string)' })
  }
  // 
  const words = sentence.trim().toLowerCase().split(/\s+/)
  if (words.length === 0) {
    return res.status(400).json({ error: 'no words found in sentence' })
  }

  const existed = new Set(Object.keys(wordCounter))
  let numNewWords = 0
  let numOldWords = 0
  for (const t of words) {
    if (existed.has(t)) {
        numOldWords++;
    } else{
        numNewWords++;
    } 
  }

  for (const t of words) {
    wordCounter[t] = (wordCounter[t] || 0) + 1
  }

  return res.status(201).json({
    text: `Added ${numNewWords} words, ${numOldWords} already existed`,
    currentCount: -1
  })
});


app.delete('/word/:word', (req, res) => {
  const word = req.params.word
  if (!word || typeof word !== 'string') {
    return res.status(400).json({ error: 'word is required' })
  }

  const w = word.trim().toLowerCase()

  if (!(w in wordCounter)) {
    return res.status(404).json({ error: 'word not found' })
  }
  const previousCount = wordCounter[w]
  delete wordCounter[w]

  return res.status(200).json({ text: `Deleted ${w}`, previousCount })
})






app.listen(PORT, () => console.log(`Listening on port:${PORT}`));
