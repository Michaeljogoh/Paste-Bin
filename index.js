const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const PORT = process.env.PORT
const mongoose = require('mongoose');
const PASTE_DB = process.env.PASTE_DB
const pasteBinRoute = require('./route/pasteBinRoute');


const connectDB = async () =>{
    await mongoose.connect(PASTE_DB, {useNewUrlParser: true , useUnifiedTopology: true})
    console.log('MongoDB');
}
connectDB();

// bodyparser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Route

app.use(pasteBinRoute);

// cors
app.use(cors({origin:"*" , credentials: true , methods:  ['GET','POST','DELETE','UPDATE','PUT','PATCH']}))

app.listen(PORT , ()=>{
    console.log(`Server Started at ${PORT}`)
})