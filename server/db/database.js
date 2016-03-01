var mysql = require('mysql');

var connection = mysql.createPool({
  host:  process.env.DB_HOST || "localhost",
  user: process.env.DB_username ||"root",
  password: process.env.DB_password || "",
  database: process.env.DB_database || "fileData"
});

connection.getConnection(function(err) {
if (err) {
  console.error("didn't work");
  return;
}
console.log("connected to database");
});


module.exports = connection;