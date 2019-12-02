const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
    paymentType: {
        type: Number,
        required: true
    },
    paymentId: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.Schema('Sale',saleSchema);