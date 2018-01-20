var mysql = require("mysql");

var connection = mysql.createConnection({
  	host: "olxl65dqfuqr6s4y.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  	user: "mpws57hnlcl1skxn",
    database: "wb6kwll63grmj9bd",
    password: "s3l8bjn103q5cbry",
 	  port: 3306
})

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);

});

module.exports = connection;


