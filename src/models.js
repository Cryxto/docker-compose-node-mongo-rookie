const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true, 
    },
    address:{
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    }
},{ collection: 'User' })

const User = mongoose.model("User", UserSchema)

module.exports = {User}