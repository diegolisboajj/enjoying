const mongoose = require('mongoose');

const branchSchema = mongoose.Schema({
    cnpj: {
        type: String,
        required: true,
        unique: true
    },
    trandingName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Branch', branchSchema);