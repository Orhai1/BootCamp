const pushPull = function(action) {
  action()
}

const push = function () {
  console.log("pushing it!")
}

const pull = function () {
  console.log("pulling it!")
}

pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"
