var fs =require("fs")
var fileName ="./data/write.txt";
var dataToBeWritten ="this is going to be written in the file"

var fileWrite =function (err){
    if (err){
        throw err;
    }
    console.log("content is successfunlly writen in yhe file")
}

fs.writeFile(fileName,dataToBeWritten,fileWrite)