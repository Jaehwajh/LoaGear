const mongoose = require("mongoose");

const braceletSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    rarity: {
        type: String,
        required: true
    },
    properties1: {
        type: String,
        required: true
    },
    properties2: {
        type: String,
    },
    properties3: {
        type: String,
    },
    properties4: {
        type: String,
    },
    properties5: {
        type: String,
    },
    character: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Bracelet", braceletSchema);