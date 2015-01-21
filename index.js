var Search    = require('./src/search.js'),
searchEngine  = new Search()

var tag = "?tag=minimumviable-20"

var search = function(keywords, cb) {
  searchEngine.search(keywords, function(res){
    cb(res)
  })
}

function main() {

  var kw = 'wrong'

  search(kw, function(res){
    console.log(res)
  })
}

main()
