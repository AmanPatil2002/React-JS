const db = require("../config/db"); //import database connection
const jwt = require("jsonwebtoken");//Imports the jsonwebtoken library.

const SECRET_KEY = "mysecretkey";

const getAuth = (req, res) => {
  db.query("SELECT id, email FROM users", (err, result) => {
    if (err) {
    console.error(err);
    return res.status(500).json({message: err.message,});
    }
    res.json(result);
  });
};

const postAuth = (req, res) => {
  const { username,email, password } = req.body;
  const sql ="INSERT INTO users(username,email, password) VALUES (?, ?, ?)";

  db.query(sql, [username,email, password], (err, result) => {
    if (err) {
    console.error(err);
    return res.status(500).json({
        message: err.message,
    });
    }
    const token = jwt.sign({id: result.insertId,username,},
      SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    res.status(201).json({
      message: "User Registered Successfully",
      token,
      id: result.insertId,
      username,
    });
  });
};

const checkLogin = (req, res) => {
  const { username, password } = req.body;
  console.log("Username:", username);
  console.log("Password:", password);

  db.query("SELECT * FROM users WHERE username = ?",[username],
    async (err, result) => {
      console.log("Query Result:", result);
      if (result.length === 0) {
        return res.status(401).json({message: "User not found"});
      }
      const user = result[0];
      console.log("DB Password:", user.password);
      if (password !== user.password) {
        return res.status(401).json({message: "Wrong password"});
      }
      res.json({
        message: "Login successful"
      });
    }
  );
};


module.exports = { getAuth, postAuth,checkLogin };