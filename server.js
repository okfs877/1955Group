var express = require("express");
var path = require("path");
var app = express();
var port =  8000;
var session = require("express-session");
app.use(session({secret: "codingdojorocks"}));
app.set('views', __dirname + '/client/views');
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({encoded: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client/static')));
require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app);
app.listen(port, function() {
    console.log(`listening on port ${port}`);
});