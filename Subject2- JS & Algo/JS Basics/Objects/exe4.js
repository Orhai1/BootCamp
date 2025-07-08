const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true,
    fridge: {
        price: 500,
        works: true,
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "radish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

const hasOven = kitchen.hasOven;
const fridgeWorks = kitchen.fridge.works;
const fridgePrice = kitchen.fridge.price;
const radish = kitchen.fridge.items[1]; 
const daysExpired = date - radish.expiryDate;
const halfFridgePrice = fridgePrice / 2;


let message = `${kitchen.owner}'s ${radish.name} expired ${daysExpired} day${daysExpired === 1 ? '' : 's'} ago. \n`;

if (fridgeWorks) {
  message += "Weird, considering her fridge works. ";
} else {
  message += "Probably because her fridge doesn't work. ";
}

if (hasOven) {
  message += "Luckily, she has an oven to cook the radish in.";
} else {
  message += "Too bad she doesn't have an oven to cook the radish in.";
}

if (!fridgeWorks) {
  message += ` And she'll have to pay ${halfFridgePrice} to fix the fridge.`;
}

console.log(message);