var Search = require('./src/search.js')

var tag = "?tag=minimumviable-20"


function main() {
  var searchEngine = new Search()
  var keywords = "the idiot"

  searchEngine.search(keywords, function(res){
    console.log(res)
  })
}


main()
