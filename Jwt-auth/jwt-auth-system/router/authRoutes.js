const express = require("express");
const router = express.Router();

const authenticateToken = require("../middleware/authenticate");//import middleware

const { getAuth,postAuth,checkLogin} = require("../controllers/authController");//import Routes condition

router.post("/Register", postAuth);

router.get("/login", authenticateToken, getAuth);
router.post("/login", checkLogin); 

module.exports = router;