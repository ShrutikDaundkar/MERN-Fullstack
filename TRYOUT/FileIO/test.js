var fs = require("fs");
var fileName ="./data/new.txt";
var fileRead = function(err,data){
    if (err){
        throw err
    }
    console.log("reading from the file ");
    console.log(data.toString());
}

fs.readFile(fileName,fileRead);