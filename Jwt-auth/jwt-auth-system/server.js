const express = require("express")
const jwt = require("jsonwebtoken")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()

app.use(cors())
app.use(bodyParser.json())

const SECRET_KEY = "mysecretkey"

const users = [
 {id:1, username:"teacher1", password:"123", role:"teacher"},
 {id:2, username:"student1", password:"123", role:"student"}
]

function authenticateToken(req, res, next) {
 const authHeader = req.headers["authorization"]
 const token = authHeader && authHeader.split(" ")[1]

 if (!token) {
  return res.sendStatus(401)
 }

 jwt.verify(token, SECRET_KEY, (err, user) => {
  if (err) return res.sendStatus(403)

  req.user = user
  next()
 })
}

app.post("/login",(req,res)=>{

 const {username,password} = req.body

 const user = users.find(
  u => u.username === username && u.password === password
 )

 if(!user){
  return res.status(401).json({message:"Invalid credentials"})
 }

 const token = jwt.sign(
  {id:user.id, role:user.role},
  SECRET_KEY,
  {expiresIn:"1h"}
 )

 res.json({token})

})


app.get("/dashboard",authenticateToken,(req,res)=>{

 if(req.user.role === "teacher"){
  res.json({message:"Welcome Teacher Dashboard"})
 }

 else if(req.user.role === "student"){
  res.json({message:"Welcome Student Dashboard"})
 }

})


app.listen(5000,()=>{
 console.log("Server running on port 5000")
})