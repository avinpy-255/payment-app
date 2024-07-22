const mongoose = require('mongoose')


const connectDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/paymodo");
    console.log('DB connected');
}

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

const User = mongoose.model('User', userSchema);

const AccountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        default: 0,
        required: true
    }
})

const Account = mongoose.model('Account', AccountSchema)

module.exports = {
    connectDB, User, Account
}