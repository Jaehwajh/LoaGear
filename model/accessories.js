const mongoose = require('mongoose');

// const classType = ['Berserker', 'Destroyer', 'Gunlancer', 'Paladin', 'Slayer', 'Sorceress', 'Bard',
// 'Arcana', 'Summoner', 'Wardancer', 'Scrapper', 'Soulfist', 'Glaivier', 'Striker', 'Sharpshooter',
// 'Deadeye', 'Machinist', 'Artillerist', 'Gunslinger', 'Shadowhunter', 'Deathblade', 'Reaper', 'Artist',
// 'Aeromancer', 'Souleater' ];

// const statType = ['Crit', 'Specialization', 'Swiftness', 'Endurance', 'Domination', 'Expertise'];
// const accessoryType = ['Earring', 'Ring', 'Necklace'];
// const rarityType = ['Legendary', 'Relic', 'Ancient'];

// const engravinglist = [''];

const AccessoriesSchema = new mongoose.Schema({
    accessory: {
        type: String,
        enum: accessoryType,
        required: true,
    },
    rarity:{
        type: String,
        enum: rarityType,
        required: true,
    },
    primaryStats: {
        type: String,
        enum: statType,
        required: true,
    },
    secondaryStats: {
        type: String,
        enum: statType,
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
    negativeEngraving: {
        type: String,
        required: true,
    },
    negativeEngravingNode: {
        type: Number,
        required: true,
    },
    characterName: {
        type: String,
        // enum: classType, 
        required: true,
    }
});

module.exports = mongoose.model('Accessories', AccessoriesSchema);