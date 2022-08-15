const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const PORT = process.env.PORT

// bodyparser
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// cors
app.use(cors({origin:"*" , credentials: true , methods:  ['GET','POST','DELETE','UPDATE','PUT','PATCH']}))

app.listen(PORT , ()=>{
    console.log(`Server Started at ${PORT}`)
})