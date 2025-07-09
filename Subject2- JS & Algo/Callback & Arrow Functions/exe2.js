const getTime = function(callback) {
  const currentTime = new Date()
  callback(currentTime)
}

const returnTime = function(time) {
  console.log("The current time is: " + time)
}

getTime(returnTime)
