var express = require('express');
var router = express.Router();
var utilisateur = require('../models/utilisateur.js');
var ndf = require('../models/ndf.js').ndf;
var files = require('../models/ndf.js').files;


//GET one User
router.get('/:idUser', function (req, res, next) {
    utilisateur.findById(req.params.idUser).then(u => {
        res.json(u);
        console.log('getU', u)
    }).catch(e => console.log(e))
})
//GET an User with a given name*
router.get('/find/:name', function (req, res, next) {
    utilisateur.findOne({ nom: req.params.name, statut: "user" }).then(u => {
        res.json(u._id);
        console.log('getU with name : ', u.name, u)
    })
        .catch(e => console.log(e))
})

//GET all Users from one Gestionnaire
router.get('/gest/:idGest', function (req, res, next) {
    utilisateur.find({ idGest: req.params.idGest }).then(listeU => { res.status(200).json(listeU); console.log('getGestUser', listeU) })
        .catch(e => console.log(e))
})
//GET all users
router.get('', function (req, res, next) {
    utilisateur.find({statut: "user"}).then(l => res.json(l))
        .catch(e => console.log(e))
})

//POST an User
router.post('/', function (req, res, next) {
    req.body["statut"] = "user"
    utilisateur.create(req.body).then(u => { res.status(200).json(u); console.log('post', u) })
        .catch(e => console.log(e))
}
)
//UPDATE an User
router.put('/:idUser', function (req, res, next) {
    utilisateur.findByIdAndUpdate(req.params.idUser, req.body).then(u => { res.status(200).json(u); console.log('put', u) })
        .catch(e => console.log(e))
})

//DELETE an User
router.delete('/:idUser', function (req, res, next) {
    utilisateur.findByIdAndRemove(req.params.idUser).then(u => { res.status(200).json(u); console.log('delete user', u) })
        .catch(e => console.log(e));
    ndf.find({ idUser: req.params.idUser }).then(l => {
        ndf.remove({ _id: { $in: l } }).then(n => console.log('delete listNDF', n))
        files.remove({ idNdf: { $in: l } }).then(f => console.log('remove file', f))
    }).catch(e => console.log(e));
})

module.exports = router;