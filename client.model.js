const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    rfc: {
        type: String,
        required: true,
        match: /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/
    },
    name: {
        type: String,
        required: true
    },
    domicile: {
        type: String
    },
    phone: {
        type: String,
        require: true,
        match: /^[0-9]{9}$/
    },
    email: {
        type: String,
        required: true,
        match: /.+@.+\..+/,
        lowercase: true
    }
});