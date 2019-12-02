const mongoose = require('mongoose');

const operatorSchema = new mongoose.Schema({
    cpf: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    }
});

module.exports = mongoose.Schema('Operator',operatorSchema);