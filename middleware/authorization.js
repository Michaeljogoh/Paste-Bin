const jwt = require('jsonwebtoken');
const User = require('../models/User')

const isLoggedIn = async (req , res , next) =>{

const {authorization} = req.headers
    if(!authorization){
        return res.status(401).json({error:"You Must Login"});

    }
const token = authorization.replace("Bearer ","");
 await jwt.verify(token , process.env.JWT , ( err , payload)=>{
    if(err){
        return res.status(401).json({error:"You Must Login"})
    }

const {_id} = payload;
 User.findById(_id).then((userdata) =>{
req.user = userdata
next()

 })


})
} 
module.exports = { isLoggedIn }