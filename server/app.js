var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var app = express();
var port = process.env.PORT || 3000
var db = require('./db/database.js');
var bcrypt = require('bcrypt');

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

//route for signing in
app.post('/register/signin', function(req, res) {
  //query db to see if user exists
  db.query('select username, password from users where username = "' + req.body.username + '"', function(err, rows) {
    if (err) throw err;
    var hash = rows[0].password;
    //if user found, compare PW input to hashed registration PW
    if (rows[0]) {
      bcrypt.compare(req.body.password, hash, function(err, result) {
        if (result) {
          res.send('success');
        } else {
          res.sendStatus(401);
          res.end();
        }
      })
    };
  });
});

//route for registering new user
app.post('/register/newuser', function(req, res) {
  console.log("New user info:", req.body);
  //check if user exists
  db.query('SELECT 1 FROM users where username = "' + req.body.signupUN + '" LIMIT 1', function(err, rows, fields) {
    if (err) throw err;
    //if user already exists
    if (rows.length > 0) {
      console.log("user already exists");
      res.sendStatus(500);
      res.end();
    } else {
      //if new user, generate salt and hashed PW
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(req.body.signupPW, salt, function(err, hash) {
          //add username + PW to DB
          db.query('INSERT INTO users (username, password) values ("' + req.body.signupUN + '", "' + hash + '")', function(err, rows) {
            if (err) throw err;
            console.log('New user added');
            res.send('success');
          });
        });
      });
    }
  });
});

console.log('Sever is now listening on port ' + port);
