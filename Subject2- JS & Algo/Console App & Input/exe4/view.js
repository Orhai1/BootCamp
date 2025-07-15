const prompt = require('prompt-sync')();

function displayMenu() {
  console.log("\nBanking System");
  console.log("1) Check Balance");
  console.log("2) Deposit Money");
  console.log("3) Withdraw Money");
  console.log("4) Exit");
}

function getMenuChoice() {
  const input = prompt("Choose option (1–4): ");
  return input.trim();
}

function askForAmount(action) {
  const input = prompt(`Enter amount to ${action}: $`);
  const amount = Number(input);
  return amount;
}

function displayMessage(message) {
  console.log(message);
}

function displayBalance(balance) {
  console.log(`Current balance: $${balance}`);
}

module.exports = {
  displayMenu,
  getMenuChoice,
  askForAmount,
  displayMessage,
  displayBalance
};
