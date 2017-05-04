/**
 * Created by logov on 04-May-17.
 */

const SECRET_KEY = 'SuperSecretKey';

var express = require('express'),
    router = express.Router(),
    jwt = require('jsonwebtoken'),
    User = require('./models/User'),
    bcrypt = require('bcrypt');


router.post('/login', function (req, res) {
    var data = req.body;
    if (!data) return res.status(400).send();

    User.findOne({login: data.login}, function (err, user) {
        if (err) throw err;
        if (user) {
            if (bcrypt.compareSync(data.password, user.password)) {
                var token = jwt.sign(user, SECRET_KEY, {expiresIn: 60});

                res.json({
                    type: 'success',
                    message: 'Enjoy your token!',
                    token: token
                });
            } else res.status(403).send()
        } else res.status(403).send()
    });
});

router.post('/register', function (req, res) {
    var data = req.body;
    if (!data || !data.login || !data.password) return res.status(400).send();

    new User({
        login: data.login,
        password: bcrypt.hashSync(data.password, bcrypt.genSaltSync())
    }).save();

    res.json({type: 'success'})
});

router.use(function (req, res, next) {

    var token = req.body.token || req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, SECRET_KEY, function (err, decoded) {
            if (err) return res.status(403).send();
            else next();
        });
    } else return res.status(403).send();
});

router.post('/check', function (req, res) {
    res.json({type: 'success'});
});


module.exports = router;
