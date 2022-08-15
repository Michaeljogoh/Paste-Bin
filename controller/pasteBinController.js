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

module.exports = {createPasteBin}