const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/paymodo")

const  userSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
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