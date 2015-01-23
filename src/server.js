var express = require("express"),
app         = express()

var port = process.env.PORT || 3000

app.get('/more', function(req, res){
  res.send('data');
});


var init = function() {
  app.listen(port);
  console.log("[conf] server listening on "+port)
}

exports.init = init
