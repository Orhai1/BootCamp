const coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    if (!(drinkType in this.drinkRequirements)) {
        console.log("Sorry, we don't make " + drinkType);
        return;
    }

    const requiredBeans = this.drinkRequirements[drinkType];
    
    // check if we have enough beans
    if (this.beans < requiredBeans) {
      console.log("Sorry, we're all out of beans");
      return;
    }
    // have enough beans, make the drink
    this.beans -= requiredBeans;
    console.log("Here's your " + drinkType + "!");
  }
}

coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"
