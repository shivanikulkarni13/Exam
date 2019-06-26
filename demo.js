var express = require('express');
var app = express();



var customerController=function (req, res) {
  console.log("CAlling rest api");
  var customers=[
            {firstName:'radha',lastName:'patil'},
            {firstName:'Pritam',lastName:'Kale'},
            {firstName:'Raju',lastName:'Pandit'},
            {firstName:'Shivani',lastName:'panday'},
            {firstName:'Mina',lastName:'Pawar'}
      ];
  res.send(customers);
};



app.get('/customers',customerController );

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8088", host, port)
})