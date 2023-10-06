const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    templete_name : {
        type : String,
        required: true,
        unique: true
    },
    frequency : {
        type: String,
        required: true,
    },
    email_subject : {
        type: String,
        required: true,
    },
    email_body : {
        type: String,
        required: true,
    },
    status : String
})

const Templatedb = mongoose.model('templatedb', schema);

module.exports = Templatedb;