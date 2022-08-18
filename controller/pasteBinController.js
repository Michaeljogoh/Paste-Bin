const PasteBin = require('../models/pasteBin');
const nanoId = require('nano-id');
 


const createPasteBin = async (req , res) =>{
    const {text} = req.body;
    if(!text){
        return res.status(400).json({error:"Add a text"})
    }

const shortUrl = nanoId(13);

const newPasteBin = await PasteBin.create({text , shortUrl});
return res.status(200).json({newPasteBin})

}

const getPasteBin = async (req , res) =>{
    const shortUrl = await PasteBin.findOne({shortUrl: req.params.code});
    if(!shortUrl) {
        return res.status(404);
    }

    res.send(shortUrl.text)
    res.status(200)

}

module.exports = {createPasteBin , getPasteBin}