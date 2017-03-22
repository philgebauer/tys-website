var express = require('express');
var path = require('path');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(path.resolve('./index.html'));
});

app.use(express.static('./'));

app.set('port', process.env.PORT || 3003);
app.listen(app.get('port'), function () {
  console.log('Listening on port ', app.get('port'));
});
