var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema(
    {
        idSender: String,
        idReceiver: String,
        date: Date,
        content: String,
        readed: Boolean

    }
);

module.exports = mongoose.model('message',messageSchema)