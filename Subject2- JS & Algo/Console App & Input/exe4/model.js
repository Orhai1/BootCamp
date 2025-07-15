let currentBalance = 100;

function getBalance() {
  return currentBalance;
}

function deposit(amount) {
  if (!isValidAmount(amount)) {
    return { success: false, message: "Invalid amount. Must be positive number." };
  }

  currentBalance += amount;
  return { success: true, message: `New balance: $${currentBalance}` };
}

function withdraw(amount) {
  if (!isValidAmount(amount)) {
    return { success: false, message: "Invalid amount. Must be positive number." };
  }

  if (amount > currentBalance) {
    return { success: false, message: "Insufficient funds." };
  }

  currentBalance -= amount;
  return { success: true, message: `New balance: $${currentBalance}` };
}

function isValidAmount(amount) {
  return typeof amount === 'number' && amount > 0;
}

module.exports = {
  getBalance,
  deposit,
  withdraw
};
