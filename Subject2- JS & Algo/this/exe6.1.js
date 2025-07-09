const coffeeShop = {
  beans: 40,
  money: 100,

  drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 5, price: 3 },
    doubleShot: { beanRequirement: 15, price: 7 },
    frenchPress: { beanRequirement: 12, price: 6 }
  },

  makeDrink: function (drinkType) {
    if (!(drinkType in this.drinkRequirements)) {
        console.log("Sorry, we don't make " + drinkType);
        return;
    }

    const requiredBeans = this.drinkRequirements[drinkType].beanRequirement;
    
    // check if we have enough beans
    if (this.beans < requiredBeans) {
      console.log("Sorry, we're all out of beans");
      return;
    }
    // have enough beans, make the drink
    this.beans -= requiredBeans;
    console.log("Here's your " + drinkType + "!");
  },

  //Extension 1
  buyBeans: function (numBeans) {
    const beanCost = 1;
    const totalCost = numBeans * beanCost;

    if (this.money < totalCost) {
      console.log("Not enough money to buy " + numBeans + " beans.");
      return;
    }

    this.beans += numBeans;
    this.money -= totalCost;
    console.log("Bought " + numBeans + " beans for " + totalCost + "₪.");
  },

   //Extension 2
  buyDrink: function (drinkType) {
    if (!(drinkType in this.drinkRequirements)) {
        console.log("Sorry, we don't make " + drinkType);
        return;
    }

  const price = this.drinkRequirements[drinkType].price;
  this.money += price;
  this.makeDrink(drinkType);
}
}

coffeeShop.buyDrink("latte"); 
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress"); //should console "Sorry, we're all out of beans"
