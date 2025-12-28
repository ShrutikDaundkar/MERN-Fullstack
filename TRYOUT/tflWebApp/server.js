var express = require('express');
var path = require('path')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json)

var middleware= express.static(path.join(__dirname,"public"))
app.use(middleware)
app.get("/",(request,response)=>{
    response.sendFile(__dirname +'/index.html')
})

app.post("/login",(request,response)=>{
    console.log(request.body)
    console.log("Login form posted by brower is submitted here");
})
app.post("/register",(request,response)=>{
    console.log(request.body)
    console.log("new user")
})

app.listen(7878)
console.log("app is running on the port 7878");