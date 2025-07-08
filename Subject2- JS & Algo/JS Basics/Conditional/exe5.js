let customerType = "premium";
let purchaseAmount = 150;
let dayOfWeek = 6; // 0 = Sunday, 1 = Monday, etc.

let discount = 0;

if (customerType === "vip") {
  discount = 0.20;
} else if (customerType === "premium") {
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    discount = 0.15;
  } else {
    discount = 0.10;
  }
} else if (customerType === "regular") {
  if (purchaseAmount > 100) {
    discount = 0.10;
  } else if (purchaseAmount > 50) {
    discount = 0.05;
  } else {
    discount = 0;
  }
}

let finalPrice = purchaseAmount * (1 - discount);

console.log("Discount: " + (discount * 100) + "%");
console.log("Final Price: $" + finalPrice);
