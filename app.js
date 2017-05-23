var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var app = express();
var mongoDBUrl = "mongodb://localhost:27017/test";

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(mongoDBUrl, function (err) {
    if (err) {
        console.log(err);
        process.exit(0);
    } else {
        console.log('Mongodb connected');
    }
});

require("./routes.js")(app);

module.exports = app;
