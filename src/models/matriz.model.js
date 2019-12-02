const mongoose = require('mongoose');

const MatrizSchema = new mongoose.Schema({
    cnpj: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    contractId: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.Schema('Matriz', MatrizSchema);