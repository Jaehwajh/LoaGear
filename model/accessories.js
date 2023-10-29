const mongoose = require("mongoose");

const accessoriesSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },

});

module.exports = mongoose.model("Accessories", accessoriesSchema);