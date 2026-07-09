
const mysql = require("mysql2");//import MySQL

const connection = mysql.createConnection({ //create connection to connect to database
  host: "localhost",
  user: "root",
  password: "1234",
  database: "cinema",
});

connection.connect((err) => {
  if (err) {
    console.log("Connection to Database Failed");
    return;
  }
  console.log("Connection to Database Successful");
});

module.exports = connection;