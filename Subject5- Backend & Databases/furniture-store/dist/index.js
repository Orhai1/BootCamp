document.getElementById("check-btn").addEventListener("click", () => {
  //ex3
  const itemInput   = document.getElementById('item-input');
  const checkBtn    = document.getElementById('check-btn');
  const priceResult = document.getElementById('price-result');

  //ex5
  const buyInput = document.getElementById('buy-input');
  const buyBtn   = document.getElementById('buy-btn');
  const buyResult= document.getElementById('buy-result');

  async function checkPrice() {
    const name = itemInput.value.trim();
    if (!name) { 
        priceResult.textContent = "Please enter an item name";
         return;
        }

    try {
     
      const res  = await fetch('/priceCheck/' + name);
      const data = await res.json();
      priceResult.textContent = (data.price === null) ? "Item not found": 'Price: ' + data.price;
    } catch {
      priceResult.textContent = "Error fetching price";
    }
  }

  
  async function buyItem() {
    const name = buyInput.value.trim();
    if (!name) { 
        buyResult.textContent = 'Please enter an item to buy'; 
        return; 
    }

    try {
      const res  = await fetch('/buy/' + name);
      const data = await res.json();

      if (data.error || data.price === null) {
        buyResult.textContent = 'Item not found';
        return;
      }

      buyResult.textContent =
        `You've just bought ${data.name} for ${data.price}. ` +
        `There are ${data.inventory} left now in the store.`;
    } catch {
      buyResult.textContent = 'Error buying item';
    }
  }

  //ex3
  checkBtn.addEventListener('click', checkPrice);
  itemInput.addEventListener('keydown', e => e.key === 'Enter' && checkPrice());

  //ex5
  buyBtn.addEventListener('click', buyItem);
  buyInput.addEventListener('keydown', e => e.key === 'Enter' && buyItem());
});
