var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var app = express();
var port = process.env.PORT || 3000
var db = require('./db/database.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client')));

// app.get('/p/*', function (req, res){
//     console.log("hello");
//     var options = {
//         root: __dirname + '/public/'
//     }
//     res.sendFile("index.html",options, function(err){
//         if(err){
//             console.log(err);
//             res.status(err.status).end();
//         }
//     });
// });
app.listen(port);

//route for registering new users
app.post('/register/newuser', function(req, res) {
  console.log(req.body);

  var answer = db.query('INSERT INTO users (username, password) values ("' + req.body.signupUN + '", "' + req.body.signupPW + '")', function(err, rows) {
    if (err) throw err;

    db.query('SELECT * from users', function(err, rows) {
      if (err) throw err;

      console.log('Data received:');
      console.log(rows);
    });
  });
});

console.log('Sever is now listening on port ' + port);
