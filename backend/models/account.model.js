const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountSchema = new Schema({
    username: {type: String, required: true, unique: true, minlength: 1, trim: true,},
    balance: {type: Number, required: true,},
},
    {timestamps: true,} 
);

const Account = mongoose.model('Account', accountSchema);
module.exports = Account;