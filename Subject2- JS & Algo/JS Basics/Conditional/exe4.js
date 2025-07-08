let usernameLength = 6;
let passwordLength = 7;
let userAge = 15;

let allValid = true;

if (usernameLength < 5) {
  console.log("Username must be at least 5 characters.");
  allValid = false;
}

if (passwordLength < 8) {
  console.log("Password must be at least 8 characters.");
  allValid = false;
}

if (userAge < 13) {
  console.log("User must be 13 or older.");
  allValid = false;
}

if (allValid) {
  console.log("Account created successfully!");
}
