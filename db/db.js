var redis = require('redis'),
client    = redis.createClient()

client.on('connect', function(){
  console.log("[conf] conected to db")
})

var getNrEntries = function(index, nr){
  console.log("getNrEntries")
}

var addEntry = function(){
  console.log("addEntry")
}

exports.getNrEntrie = getNrEntries
exports.addEntry = addEntry
