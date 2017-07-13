var express = require('express'); 
var app = express(); 

app.use("/data", express.static(__dirname + '/data'));
app.use("/assets", express.static(__dirname + '/assets'));
app.use("/node_modules", express.static(__dirname + '/node_modules'));

app.get('/', function(req,res) { 
    res.sendFile(__dirname + '/index.html'); 
}); 

app.listen(3000);