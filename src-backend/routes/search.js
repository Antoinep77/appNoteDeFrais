var express = require('express');
var router = express.Router();
var ndf = require('../models/ndf').ndf ;

router.post('/:idGest',function(req,res,next){
    var cond = {

        "userData.intitule": new RegExp(req.body.intitule,'i'),
    };
    if(req.body.dateBefore&&req.body.dateAfter){
        cond["userData.date"] = {$gte:req.body.dateBefore, $lte: req.body.dateAfter};
    }
    else if(req.body.dateAfter){
        cond["userData.date"] = { $lte: req.body.dateAfter};
    }
    else if(req.body.dateBefore){
        cond["userData.date"] = {$gte:req.body.dateBefore};
    }

    ndf.find(cond).populate({
            path:'idUser', 
            select:'nom',
            match: {nom: new RegExp(req.body.nom,'i'),
                    idGest: req.params.idGest}
        }).then(l =>{
            console.log(l);
            l = l.filter(ndf => ndf.idUser);
            res.json(l);
        })
        .catch(e=>console.log(e))
})

module.exports = router; 