var http = require("http")


var requestHandler = function(resquest , response){
    //console.log("request is listen from brower..")
    response.write("writing on the brower")
    response.writeHead
    response.end()
}

var server =http.createServer(requestHandler)
server.listen(7777)
console.log("request send to brower")