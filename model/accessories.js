const mongoose = require("mongoose");

const accessoriesSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    type: {
        type: Schema.Types.ObjectId,
        ref: "Type"
    },
    rarity: {
        type: Schema.Types.ObjectId,
        ref: "Rarity"
    },
    quality: {
        type: Number,
        required: true
    },
    stats1: {
        type: String,
        required: true
    },
    stats2: {
        type: String,
        required: true
    },
    engraving1: {
        type: Schema.Types.ObjectId,
        required: true,
        ref:"Engraving1"
    },
    value1: {
        type: Number,
        required: true
    },
    engraving2: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Engraving2"
    },
    value2: {
        type: Number,
        required: true
    },
    negative: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Negative"
    },
    negValue: {
        type: Number,
        required: true
    },
    character: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Accessories", accessoriesSchema);