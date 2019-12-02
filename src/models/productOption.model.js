const mongoose = require('mongoose');

const productOptionSchema = new mongoose.Schema({
    value: {
        type: Number,
        required: true,
    },
    minMaxRangeValue: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.Schema('ProductOption', productOptionSchema);