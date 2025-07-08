const increaseByNameLength = function(money, name) {
  return money + name.length
}

const makeRegal = function(name) {
  return "His Royal Highness, " + name
}

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"
