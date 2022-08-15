const mongoose = require('mongoose');

const pasteSchema = new mongoose.model({
    text:{
        type: String,
        require: true
    },

})

const PasteBin = mongoose.model("PasteBin" , pasteSchema);
module.exports = PasteBin;