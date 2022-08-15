const mongoose = require('mongoose');


const pasteSchema =  new mongoose.Schema({
    text:{
        type: String,
        require: true
      
    },
    
    shorturl:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now()
    }

})

const PasteBin = mongoose.model('url' , pasteSchema);
module.exports = PasteBin;