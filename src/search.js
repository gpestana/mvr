var util = require('util'),
    OperationHelper = require('apac').OperationHelper;
    awsLogin = require('../login')


var tag = "?tag=minimumviable-20"

//Amazon login helper
var opHelper = new OperationHelper({
    awsId:     awsLogin.awsId,
    awsSecret: awsLogin.awsSecret, 
    assocId:   awsLogin.assocId
});



function Search() {}


/*
 * search() sends back the best result given the keywords
 */
Search.prototype.search = function(keywords, cb) {
  
  //dbSearch()

  amazonSearch(keywords, function(raw){
    parseResults(raw, function(res){
      cb(res)
    })    
  })
}


var amazonSearch = function(kws, cb) {
  opHelper.execute('ItemSearch', {
    'SearchIndex': 'Books',
    'Keywords': kws,
    'ResponseGroup': 'ItemAttributes,Images'
  }, function(err, res) {
      cb(res)
  }) 
}

var parseResults = function(raw, cb) {
  var firstResult = raw.ItemSearchResponse.Items[0].Item[0]
  var res = {}
  
  res.EAN = firstResult.ItemAttributes[0].EAN[0]
  res.author = firstResult.ItemAttributes[0].Author[0] 
  res.title = firstResult.ItemAttributes[0].Title[0] 
  res.url = firstResult.DetailPageURL[0]+tag
  res.reviews = {}

  res.img = firstResult.LargeImage[0]
  res.img.Height = res.img.Height[0]._
  res.img.Width = res.img.Width[0]._
 
  cb(res)
}



module.exports = Search
