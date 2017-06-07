/**
 * Created by logov on 16-Dec-16.
 */

var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    path = require('path'),
    app = express(),
    db = require('./db');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8222');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});


db.then(function () {
    app.use('/auth', require('./api/auth'));
    // app.use('/api', require('./api/posts'));
    app.use('/', require('./site'));
    app.use(express.static(path.join(__dirname, '/../site/public')));
});


var port = process.env.PORT || 8222;
app.listen(port);
console.log('Server started on port ' + port);
