var message = require("../models/message")
var user = require('../models/utilisateur');

f = function (app) {
    var http = require('http').Server(app);
    var io = require('socket.io')(http);
    var router = require('express').Router();

    io.on('connection', function (socket) {
        console.log('a user connected');
        socket.on('join', function (id) {
            console.log('user id : ' + id);
            socket.join(id);
        });


    })

    router.post("/", function (req, res, next) {
        io.to(req.body.idReceiver).emit('message',req.body);
        message.create(req.body)
            .then(m => res.json(m))
            .catch(e => console.log(e));
    });

    router.get("/count/:id", function(req,res,next){
        message.aggregate([
            {$match :  { idReceiver: req.params.id ,readed: false}},
            {$group : {_id: "$idSender",
                    number:{ $sum:1}
            }}]
        ).then(l => res.json(l))
        .catch(e=> console.log(e))
    })

    router.get("/correspondents/:id", function(req,res,next){
        user.findOne({_id:req.params.id})
        .then(u =>{
        user.find({$or: [{idGest: u._id},{_id: u.idGest }]})
            .then(l => res.json(l))
            .catch(e=> console.log(e))
        }).catch(e=> console.log(e))
    })

    router.get("/:id1/:id2", function (req, res, next) {
        message.find({ idReceiver: {$in: [req.params.id1,req.params.id2]}, idSender: {$in: [req.params.id1,req.params.id2]}  })
            .sort('date')
            .then(l => res.json(l))
            .catch(e => console.log(e));
    })
    router.put("/setReaded/:idReader/:idSender",function(req,res,next){
        message.updateMany({idReceiver: req.params.idReader, idSender:req.params.idSender,readed: false},{readed: true})
            .then(m => res.json(m))
            .catch(e=> console.log(e));
    })



    http.listen(3001, function () {
        console.log('listening on *:3001');
    });
    
    return router;
}

module.exports = f;