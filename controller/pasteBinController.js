const PasteBin = require('../models/pasteBin');
const shortid = require('shortid');

const createPasteBin = async (req , res) =>{
    const {text} = req.body;
    if(!text){
        return res.status(400).json({error:"Add a text"})
    }

const shorturl = shortid.generate();

const newPasteBin = await PasteBin.create({text , shorturl});
return res.status(200).json({newPasteBin})

}

const getPasteBin = async (req , res) =>{
    const shortUrl = await Url.findOne({shorturl: req.params.code});
    if(!shortUrl) {
        return res.status(404);
    }

    res.render(shortUrl.text)
    res.status(200)

}

module.exports = {createPasteBin , getPasteBin}