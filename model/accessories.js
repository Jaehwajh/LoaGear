const mongoose = require("mongoose");

const accessoriesSchema = new mongoose.Schema({
    user: {
        type: mongoose.ObjectId, 
        ref: "User"
    },
    accType: {
        type: String,
        required: true
    },
    accRarity: {
        type: String,
        required: true
    },
    accQuality: {
        type: Number,
        required: true
    },
    statsOne: {
        type: String,
        required: true
    },
    statsOneValue:{
        type: Number,
        required: true
    },
    statsTwo:{
        type: String,
    },
    statsTwoValue:{
        type: Number,
        default: 0,
    },
    engravingOne: {
        type: String,
        required: true
    },
    engravingOneNode: {
        type: Number,
        required: true
    },
    engravingTwo: {
        type: String,
        required: true
    },
    engravingTwoNode: {
        type: Number,
        required: true
    },
    negativeEngraving: {
        type: String,
        required: true
    },
    negativeNode: {
        type: Number,
        required: true
    },
    character:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Accessories", accessoriesSchema);