const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express();
app.use(cors())
app.use(express.json())
const users = require('./model')

mongoose.connect('mongodb+srv://venkateshnani:lamborghini@admin.wxshtw5.mongodb.net/Node-API?retryWrites=true&w=majority&appName=admin')
.then(()=>{
    console.log('database connected...');
    app.listen(3001,()=>{
        console.log('server is on port 3001..');
    })
}).catch((error)=>{
    console.log(error)
})

app.post('/',async (req,res)=>{
    const userDetails = users.create(req.body)
    res.status(200).json(userDetails)
})

app.get('/',async (req,res)=>{
        const allUsers = await users.find();
        res.status(200).json(allUsers);
})