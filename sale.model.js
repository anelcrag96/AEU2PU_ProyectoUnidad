const mongoose = require("mongoose");

esquemaVenta = mongoose.Schema({
    cliente: [{
        id: String,
        required: true
    }],
    fecha: {
        type: Date
    },
    producto: [{
        id: String,
        cantidad: Number
    }],
    subtotal: {
        type: Number,
        required: true
    },
    iva: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
});

module.exports = esquemaVenta;