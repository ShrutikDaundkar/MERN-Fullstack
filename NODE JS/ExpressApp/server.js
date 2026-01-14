const { response } = require('express')
var express = require('express')
var path = require('path')

var app = express()
var staticfolder=express.static(path.join(__dirname,"public"))

app.use(staticfolder)
app.get("/",(request ,response)=>{
    response.sendFile(__dirname +"index.html")
})

app.listen(9000)
console.log("app is runnning on port number 9000")