const mongoose = require("mongoose");

const braceletSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    stat1: {
        type: String,
        required: true
    },
    stat2: {
        type: String,
        required: true
    },
    character: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("bracelet", braceletSchema);