const mongoose = require('mongoose');

const StoneSchema =  new mongoose.Schema({
    primaryEngraving: {
        type: String,
        required: true,
    },
    secondaryEngraving: {
        type: String,
        required: true,
    },
    negativeEngraving: {
        type: String,
        required: true,
    },
    characterName: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Stone', StoneSchema);