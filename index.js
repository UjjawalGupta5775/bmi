const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html")
});

app.post('/', function(req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var height2 = (height/100) ** 2;
    var bmi = weight / height2;
    res.send("Your BMI is: " + bmi);
});

app.listen(3000, function(){
    console.log("Server started at port 3000.")
});