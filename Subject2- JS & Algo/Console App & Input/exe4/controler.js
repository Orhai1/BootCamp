const model = require('./model');
const view = require('./view');

function handleChoice(choice) {
  switch (choice) {
    case '1':
      handleBalance();
      break;

    case '2':
      handleDeposit();
      break;

    case '3':
      handleWithdraw();
      break;

    case '4':
      view.displayMessage("Goodbye!");
      return false;

    default:
      view.displayMessage("Invalid option. Please choose 1–4.");
  }
  return true;
}

function handleBalance() {
  const balance = model.getBalance();
  view.displayBalance(balance);
}

function handleDeposit() {
  const amount = view.askForAmount('deposit');
  const result = model.deposit(amount);
  view.displayMessage(result.message);
}

function handleWithdraw() {
  const amount = view.askForAmount('withdraw');
  const result = model.withdraw(amount);
  view.displayMessage(result.message);
}

function run() {
  let running = true;
  while (running) {
    view.displayMenu();
    const choice = view.getMenuChoice();
    running = handleChoice(choice);
  }
}

run();
