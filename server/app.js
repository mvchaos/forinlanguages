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
  var userExists;
  console.log("New user info:", req.body);
  //see if user exists
  db.query('SELECT 1 FROM users where username = "' + req.body.signupUN + '" LIMIT 1', function(err, rows, fields) {
    if (err) throw err;
    if (rows.length > 0) {
      console.log("already exists");
      res.sendStatus(500);
      res.end();
    }
    else {
    db.query('INSERT INTO users (username, password) values ("' + req.body.signupUN + '", "' + req.body.signupPW + '")', function(err, rows) {
    if (err) throw err;
    console.log('New user added');
    res.send('success');
  })
    }
  });
// });
//   console.log("does it stilluserExists)
//   if (!userExists) {
//     db.query('INSERT INTO users (username, password) values ("' + req.body.signupUN + '", "' + req.body.signupPW + '")', function(err, rows) {
//     if (err) throw err;
//     console.log('New user added');
//   })
//   }
//   else {
//     res.status(500).send('User already exists!');
//   };
  //close db connection
});

console.log('Sever is now listening on port ' + port);