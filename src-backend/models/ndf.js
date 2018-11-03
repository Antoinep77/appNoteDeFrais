var mongoose = require('mongoose');

var ndfSchema = new mongoose.Schema(
    {
        idUser: {
            type: String,
            ref:'user'
        },
        userData: {
            intitule : String,
            montant: Number,
            devise: String,
            date: Date,
            commentaire: String ,
        },
        gestData: {
            commentaire: String,
        },
        statut: String
    }
);
var fileSchema = new mongoose.Schema(
    {
        idNdf: String,
        data: Buffer, 
        contentType: String, 
        name: String 
    }
)

module.exports = {
    ndf:  mongoose.model('ndf',ndfSchema),
    files: mongoose.model('files',fileSchema)
}
