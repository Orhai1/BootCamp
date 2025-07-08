const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

const userName  ="Bob";

// Case-insensitive for 3.2
const lowerName = userName.toLowerCase();

let found = false;

for (let key in reservations) {
  if (key.toLowerCase() === lowerName) {
    found = true;
    if (reservations[key].claimed === false) {
      console.log("Welcome, " + key);
    } else {
      console.log("Hmm, someone already claimed this reservation");
    }
    break;
  }
}
// if (!found) {
//   console.log("You have no reservation");
// }


// 3.1
if (!found) {
  reservations[userName] = { claimed: true };
  console.log("You had no reservation, but now you do.");
}
