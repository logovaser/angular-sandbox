/**
 * Created by logov on 16-Dec-16.
 */

var express = require('express'),
    path = require('path'),
    router = express.Router();

router.get(['/', '/login', '/register', '/about', '/cabinet', '/camera_test'], function (req, res) {
    res.sendFile(path.join(__dirname + '/site/public/index.html'))
});

module.exports = router;
