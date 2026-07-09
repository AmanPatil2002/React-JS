require('dotenv').config()
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_host,
  user:  process.env.DB_user,
  password:  process.env.DB_password,
  database:  process.env.DB_name,
});

connection.connect((err) => {
  if (err) {
    console.log("Connection to Database Failed");
    return;
  }
  console.log("Connection to Database Successful");
});

module.exports = connection;