// Simulated inventory database
const inventory = {
  'laptop': { price: 999, stock: 5 },
  'mouse': { price: 25, stock: 10 },
  'keyboard': { price: 75, stock: 0 }, // Out of stock
  'monitor': { price: 299, stock: 3 }
};

function checkInventory(items) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const unavailable = items.find(item => !inventory[item] || inventory[item].stock <= 0);
      if (unavailable) {
        reject(new Error(`${unavailable} is out of stock`));
      } else {
        resolve(items);
      }
    }, 500);
  });
}

function calculateTotal(items) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const subtotal = items.reduce((sum, item) => sum + inventory[item].price, 0);
      const tax = subtotal * 0.08;
      const total = subtotal + tax;
      resolve({ subtotal, tax, total });
    }, 200);
  });
}

function processPayment(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.9) {
        resolve({ transactionId: Math.floor(Math.random() * 1000000), amount, status: 'success' });
      } else {
        reject(new Error('Payment failed. Please try again.'));
      }
    }, 1500);
  });
}

function updateInventory(items) {
  return new Promise((resolve) => {
    setTimeout(() => {
      items.forEach(item => {
        if (inventory[item]) {
          inventory[item].stock -= 1;
        }
      });
      resolve({ message: 'Inventory updated', inventorySnapshot: JSON.parse(JSON.stringify(inventory)) });
    }, 300);
  });
}

// Complete checkout 
function checkout(itemNames) {
  let orderSummary = {};
  return checkInventory(itemNames)
    .then(availableItems => {
      return calculateTotal(availableItems);
    })
    .then(prices => {
      orderSummary = prices;
      return processPayment(prices.total);
    })
    .then(paymentResult => {
      orderSummary.payment = paymentResult;
      return updateInventory(itemNames);
    })
    .then(updateResult => {
      orderSummary.inventoryUpdate = updateResult;
      return orderSummary;
    })
    .catch(err => {
      throw err; 
    });
}


// Test cases:
checkout(['laptop', 'mouse'])           // Should succeed
  .then(result => console.log('Order success:', result))
  .catch(error => console.log('Order failed:', error.message));

checkout(['laptop', 'keyboard'])        // Should fail - keyboard out of stock
  .then(result => console.log('Order success:', result))
  .catch(error => console.log('Order failed:', error.message));

checkout(['monitor', 'mouse', 'laptop']) // Might fail at payment (10% chance)
  .then(result => console.log('Order success:', result))
  .catch(error => console.log('Order failed:', error.message));
