/**
 * Created by logov on 07.06.17.
 */

var express = require('express'),
    router = express.Router(),
    Users = require('../schemas/User');


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

router.post('/posts/get', function (req, res) {

    Users
        .find({})
        .exec(function () {

        });

    res.json({type: 'success'});
});


module.exports = router;
