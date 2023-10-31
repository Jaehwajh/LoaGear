const mongoose = require("mongoose");

const stoneSchema = new mongoose.Schema({
    user: {
        type: mongoose.ObjectId, 
        ref: "User"
    },
    engravingOne: {
        type: String,
        required: true
    },
    engravingTwo: {
        type: String,
        required: true
    },
    negativeEngraving: {
        type: String,
        required: true
    },
    character: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Stone", stoneSchema);