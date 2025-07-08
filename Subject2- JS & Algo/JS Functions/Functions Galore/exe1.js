const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!"
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub"
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power"
  }
]

const capitalize = function(str) {
  let capitalizedStr = ""
  capitalizedStr += str[0].toUpperCase()      // first letter, capitalized
  capitalizedStr += str.slice(1)              // rest of the string
  return capitalizedStr
}

const combineLocation = function(city, country) {
  return capitalize(city) + ", " + capitalize(country)
}

const getAge = function(age) {
  if (age < 21) {
    return "an Underage"
  } else if (age > 55) {
    return "a 55+ year old"
  } else {
    return age + " year old"
  }
}

const capitalizeProfession = function(profession) {
  let words = profession.split(" ")
  let result = ""
  for (let i = 0; i < words.length; i++) {
    result += capitalize(words[i])
    if (i < words.length - 1) {
      result += " "
    }
  }
  return result
}


const capitalizeCatchphrase = function(name, catchphrase) {
  return capitalize(name) + ' loves to say "' + capitalize(catchphrase) + '."'
}

const getSummary = function(person) {
  let summary = ""
  summary += capitalize(person.name)
  summary += " is " + getAge(person.age) + " "
  summary += capitalizeProfession(person.profession)
  summary += " from " + combineLocation(person.city, person.country) + ". "
  summary += capitalizeCatchphrase(person.name, person.catchphrase)
  return summary
}

for (let i = 0; i < people_info.length; i++) {
  console.log(getSummary(people_info[i]))
}