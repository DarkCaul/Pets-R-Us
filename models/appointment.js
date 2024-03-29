const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const appointment = new Schema({
    userName: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    service: { type: String, required: true, },
});

module.exports = mongoose.model('appointment', appointment);
