const express = require("express");
const app = express();
var loremIpsum = require("lorem-ipsum");
output = loremIpsum({
    count: 3                      // Number of words, sentences, or paragraphs to generate. 
  , units: 'paragraphs'            // Generate words, sentences, or paragraphs. 
  , sentenceLowerBound: 5         // Minimum words per sentence. 
  , sentenceUpperBound: 15        // Maximum words per sentence. 
  , paragraphLowerBound: 3        // Minimum sentences per paragraph. 
  , paragraphUpperBound: 7        // Maximum sentences per paragraph. 
  , format: 'html'               // Plain text or html 
  , random: Math.random           // A PRNG function. Uses Math.random by default 

});
var port = 3000;

app.get("/lorem", function(req, res){
    res.send(output)
});

app.listen(port, function(){
    console.log("You have opened a server in port:", port);
});