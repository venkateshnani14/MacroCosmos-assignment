const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    dob:Date
})

const users = mongoose.model('users',userSchema)
module.exports = users