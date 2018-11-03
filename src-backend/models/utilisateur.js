var mongoose = require('mongoose');


var userSchema = new mongoose.Schema(
    {
        idGest: String,
        nom : String,
        statut: String // "user" or "gest"

    }
);


module.exports = mongoose.model('user',userSchema)