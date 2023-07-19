const mongoose = require('mongoose');

const StoneSchema =  new mongoose.Schema({
    primarEngraving: {
        type: String,
        required: true,
    },
    secondaryEngraving: {
        type: String,
        required: true,
    },
    characterName: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Stone', StoneSchema);