const mongoose = require('mongoose');


let customers = new mongoose.Schema({
    customerId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique:true },
});

module.exports = mongoose.model('Customer', customers);
