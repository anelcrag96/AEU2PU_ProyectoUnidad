const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    }
});