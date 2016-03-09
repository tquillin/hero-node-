var express = require('express');
var app = express();


app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true }));

var mongoose = require('mongoose');
var mongoPath = process.env.MONGOLAB_URI || 'mongodb://localhost/hero-node';
mongoose.connect(mongoPath);

app.get('/', function(req, res) {
    res.render('index');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
