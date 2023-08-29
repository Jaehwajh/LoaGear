const mongoose = require("mongoose");

const stoneSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    engraving1: {
        type: Schema.Types.ObjectId,
        required: true,
        ref:"Engraving1"
    },
    engraving2: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Engraving2"
    },
    negative: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Negative"
    },
    character: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Stone", stoneSchema);