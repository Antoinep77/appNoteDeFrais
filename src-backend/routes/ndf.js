var express = require('express');
var router = express.Router();
var ndf = require('../models/ndf.js').ndf;
var files = require('../models/ndf.js').files;
var IncomingForm = require('formidable').IncomingForm;
var fs = require('fs');

//GET all ndf
router.get('/',function(req,res,next){
    ndf.find().then( n =>{
        res.json(n);
        console.log('get',n);
    }).catch(e => console.log(e))
})

//GET one NDF
router.get('/:idNDF',function(req,res,next){
    ndf.findById(req.params.idNDF).then( n =>{
        res.json(n);
        console.log('get',n)
    }).catch(e => console.log(e))
})

//GET all NDF from one User
router.get('/user/:idUser',function(req,res,next){
    ndf.find({idUser : req.params.idUser})
    .then(listeNdf => {
        res.status(200).json(listeNdf) ;
        console.log('getUserNdf',listeNdf)
    }).catch(e=> console.log(e))
})

//POST a NDF
router.post('/',function(req,res,next){
    console.log(req.body)
   ndf.create(req.body).then(n=> {res.status(200).json(n);console.log('post',n)})
                    .catch(e =>console.log(e) )
}
)
//UPDATE a NDF
router.put('/:idNDF',function(req,res,next){
    ndf.findByIdAndUpdate(req.params.idNDF,req.body).then(n=> {res.status(200).json(n);console.log('put',n)})
                                    .catch(e=> console.log(e))
})

//DELETE a NDF
router.delete('/:idNDF',function(req,res,next){
    ndf.findByIdAndRemove(req.params.idNDF).then(n=> {
        res.status(200).json(n);
        files.findByIdAndRemove(n.idFiles).then(f => console.log('delete File',f))
        console.log('delete',n);
    })
                                    .catch(e=> console.log(e))
})

//DELETE all NDF
router.delete('/', function(req,res,next){
    ndf.deleteMany().then(e => {
        console.log('delete all ndf',e);
        res.json(e)
})
    files.deleteMany().then()
})
//POST a file in Ndf
router.post('/file/:idNdf',function(req,res,next){
    var form = new IncomingForm();
    form.on('file',(field,file) =>{
        data = fs.readFileSync(file.path);
        contentType = file.type;
        files.create({idNdf: req.params.idNdf, data: data,contentType: contentType,name: file.name})
        .then()
    });
    form.on('end',() =>res.json());
    form.parse(req)
})

//GET all files from a NDF
router.get('/file/:idNdf',function(req,res,next){
    files.find({idNdf: req.params.idNdf}).then(l => res.json(l))
})

module.exports = router;
