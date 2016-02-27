var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-03.cleardb.net",
  user: "bcec4e36a8041f",
  password: "6bc9a6f7",
  database: "heroku_cbbeaa791774cef"
});

connection.connect(function(err) {
if (err) {
  console.error("didn't work");
  return;
}
console.log("connected");
});

connection.query('SELECT * from users', function(err,rows) {
    if (err) throw err;

    console.log('Data received:');
    console.log(rows[0].username);
});


module.exports = connection;