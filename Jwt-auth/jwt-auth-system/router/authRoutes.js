const express = require("express");
const router = express.Router();

const authenticateToken = require("../middleware/authenticate");
const { getAuth,postAuth,checkLogin} = require("../controllers/authController");

router.post("/Register", postAuth);

router.get("/login", authenticateToken, getAuth);
router.post("/login", checkLogin); 

module.exports = router;