const mongoose = require('mongoose');


const pastinBinUserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    email:{
        type:String,
        required: true
    },

    password:{
        type:String,
        required: true
    }
});

const pasteBinUser = mongoose.model('pasteBinUser', pastinBinUserSchema);
module.exports = pasteBinUser;