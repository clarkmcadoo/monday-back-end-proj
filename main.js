const express = require("express");
const app = express();
var loremIpsum = require("lorem-ipsum");
var output = loremIpsum({count:3, 
                        units: "paragraphs",
                        at: "html"});
var port = 3000;

app.get("/lorem", function(req, res){
    res.send(output)
});

app.listen(port, function(){
    console.log("You have opened a server in port:", port);
});