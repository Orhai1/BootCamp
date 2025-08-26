const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

app.use(express.static("dist"));

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.get('/', (req, res) => {
  res.send("Server is up and running smoothly");
});

app.get('/priceCheck/:name', (req, res) => {
  const { name } = req.params              
  const item = store.find(
    p => p.name.toLowerCase() === name.toLowerCase()
  )
  res.json({ price: item ? item.price : null })
});

app.get('/buy/:name', (req, res) => {
  const name = req.params.name;
  const item = store.find(p => p.name === name);

  if (!item) {
    return res.status(404).json({ error: 'item not found', price: null, inventory: null });
  }
  if (item.inventory > 0) {
    item.inventory -= 1;
  }

  res.json({name: item.name, price: item.price, inventory: item.inventory});
});

//ex6
app.get('/sale', (req, res) => {
  const { admin } = req.query;      

  if (admin === 'true') {
    for (const item of store) {
      if (item.inventory > 10) {
        item.price = item.price * 0.5;   
      }
    }
  }
  res.send(store);
});

app.listen(PORT, () => console.log("server is listening..."));
