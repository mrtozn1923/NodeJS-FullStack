const mongoose = require('mongoose');
const {isEmail} = require('validator');

const loginSchema = mongoose.Schema({
    email: {
        type: String,
        //validator.js
        validate:[isEmail,'Geçersiz E-posta adresi.']
    },
    password:{
        type:String,
        required:[true,'Parola girmelisiniz.']
    }
});

module.exports = mongoose.model('Login', loginSchema);