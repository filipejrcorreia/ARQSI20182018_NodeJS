var User = require('../models/user');
var bcrypt = require('bcryptjs');


exports.registarUser = function (req, res) {

    var user = new User();
    user.name = req.body.name;
    hashedPassword = bcrypt.hashSync(req.body.password, 8);
    user.password = hashedPassword;
    user.email = req.body.email;
    user.medico = req.body.medico;
    user.farmaceutico = req.body.farmaceutico;

    user.save(function (err) {
        console.log("A guardar");
        if (err)
            return res.status(500).send("Problema ao guardar o utilizador!");


        res.json({ message: 'Utilizador registado!' });
    })

};

exports.listarUsers = function (req, res) {
    User.find(function (err, user) {
        if (err)
            res.send(err);

        res.json(user);
    })
};