var express = require('express');
var router = express.Router();
var user = require('../models/utilisateur')
var ndf = require('../models/ndf').ndf

/* GET gestionnaire listing. */
router.get('/', function(req, res, next) {
  user.find({statut: "gest" }).then(l =>{
    res.json(l);
    console.log("get liste Gestionnaire", l)
  })
  .catch(e=>console.log(e))
});
//GET a gestionnaire with id
router.get('/:idGest', function(req, res, next) {
  user.findById(req.params.idGest).then(g =>{
    res.json(g);
  })
  .catch(e=>console.log(e))
});

//GET a Gestionnaire with a given name*
router.get('/find/:name',function(req,res,next){
  user.findOne({nom : req.params.name, statut: "gest"}).then(u =>{
  res.json(u._id);
  console.log('getU with name : ',u.name,u)})
  .catch(e=>console.log(e))
})
//GET the list of all Ndf waiting for a gestionnaire
router.get('/listNdf/:idGest', function(req, res, next) {
  user.find({idGest : req.params.idGest}).then(l =>{ 
    liste = []
    for(x of l){
      liste.push(x._id);
      console.log(x._id)
    }
    ndf.find({idUser:{$in:liste}}).then(l2 => {
      res.json(l2);
      console.log(l2)
    })
    .catch(e => console.log(e))
})
});

router.post('/',function(req,res,next){
  req.body["statut"] = "gest";
  console.log(req.body)
  user.create(req.body).then(g=>{
    res.json(g);
    console.log('POST Gest : ',g)
  })
  .catch(e=>console.log(e))
})

module.exports = router;
