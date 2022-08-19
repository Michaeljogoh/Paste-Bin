const pasteBinUser = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



const register = async (req , res) =>{
    const {name , email , password  , password2} = req.body

    if(!name || !email || !password || !password2){
        return res.status(400).json({error:'All Fields is required'})

    }

    if(password !== password2){
        return res.status(400).json({error:'Password does not match'})
    }

    const newEmail = await pasteBinUser.findOne({ email })
    if(newEmail){
        return res.status(400).json({error: "Email already exist"})
    }
   

  const  hashPassword = await bcrypt.hash(password , 10);

    const newUser = await pasteBinUser.create({name , email , password:hashPassword})
    return res.status(200).json({newUser})
}


const login = async (req , res) =>{
    const {email , password} = req.body;

    if(!email || !password){
        return res.status(400).json({error:'Please add email or password'})
    }
    const savedUser =  await pasteBinUser.findOne({email})
    if(!savedUser){
     res.status(404).json({error:"Invalid Email"})
    }

const doMatch =  await  bcrypt.compare(password, savedUser.password)
            if(doMatch){
               const token = jwt.sign({user_id:savedUser}, process.env.JWT , {expiresIn : '1d'})
               res.status(200).json({token, user:savedUser})
            } else {
                return res.status(401).json("Invaild Password")
            }
 

}


module.exports = {register , login }

