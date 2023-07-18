const mongoose = require('mongoose');

const classType = ['Berserker', 'Destroyer', 'Gunlancer', 'Paladin', 'Slayer', 'Sorceress', 'Bard',
'Arcana', 'Summoner', 'Wardancer', 'Scrapper', 'Soulfist', 'Glaivier', 'Striker', 'Sharpshooter',
'Deadeye', 'Machinist', 'Artillerist', 'Gunslinger', 'Shadowhunter', 'Deathblade', 'Reaper', 'Artist' ]

const AccessoriesSchema = new mongoose.Schema({
    primaryStats: {
        type: String,
        required: true,
    },
    secondaryStats: {
        type: String,
    },
    primaryEngraving: {
        type: String,
        required: true,
    },
    primaryEngravingNodes: {
        type: Number,
        required: true,
    },
    secondaryEngraving: {
        type: String,
        required: true,
    },
    secondaryEngravingNode: {
        type: Number,
        required: true,
    },
    characterClass: {
        type: String,
        enum: classType, 
        required: true,
    }
});

module.exports = mongoose.model('Accessories', AccessoriesSchema);