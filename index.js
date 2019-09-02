var https = require('https');
var express  = require('express');
var fs = require('fs'); //file system
var port = 3020;

var app = express();
app.use(express.static(__dirname+'/public'));

var privateKey = fs.readFileSync('privatekey.pem').toString();
var certificate = fs.readFileSync('certificate.pem').toString();

var httpOptions = {key: privateKey, cert: certificate};


app.get('/', function(req, res) {
    console.log(req.url)
    //res.send("hwllo")
    res.sendFile(__dirname + '/public/index.html');
});

https.createServer(httpOptions, app).listen(port, () => {
    console.log(">> Serving on " + port);
    });