var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var port = 3000;
var app = express();
var controllers = require('./server/controllers');

//View Engine
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//controllers
app.use(controllers);

app.listen(port, function(){
    console.log('Server started on port ' + port);
});