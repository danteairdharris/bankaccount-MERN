const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountSchema = new Schema({
    accountname: {type: String, required: true, unique: true, minlength: 1, trim: true,},
    balance: {type: Number, required: true,},
    deposit: {type: Number, default: 0,},
    withdraw: {type: Number, default: 0,},
},
    {timestamps: true,} 
);

const Account = mongoose.model('Account', accountSchema);
module.exports = Account;