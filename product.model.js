const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    codigo: {
        type: String,
        required: true
    },
    pcompra: {
        type: Number,
        required: true
    },
    pventa: {
        type: Number,
        required: true
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId, ref:'Brand'
    },
    cantidad: {
        type: Number,
        required: true
    },
    minima: {
        type: Number,
        required: true
    },
    maxima: {
        type: Number,
        required: true
    }
});