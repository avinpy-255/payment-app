const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/paymodo")

const  userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 8
    },

})

module.exports = mongoose.model('User', userSchema)