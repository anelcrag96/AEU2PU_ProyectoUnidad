const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Client'
    },
    date: {
        type: Date
    },
    /*product: {
        type: mongoose.Schema.Types.ObjectId, ref:'Product'
    },*/
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