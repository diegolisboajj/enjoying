const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.Schema('Product', productSchema);