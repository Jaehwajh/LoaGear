const Accessories = require("../model/accessories");
const Stones = require('../model/stone');
const Bracelet = require("../model/bracelet");

// Engravings
const bEngravings = require("../config/AccEngraving/battleEngraving");
const cEngravings = require("../config/AccEngraving/classEngraving");
const nEngravings = require("../config/AccEngraving/negativeEngraving");

// Accessory Properties
const rarity = require("../config/AccProperties/accRarity");
const stats = require("../config/AccProperties/accStats");
const type = require("../config/AccProperties/accType");

module.exports = {
    getDashboard: async(req, res) => {
        try{
            const acc = await Accessories.find({ user: req.user.id });
            const rock = await Stones.find({ user: req.user.id });
            const brace = await Bracelet.find({ user: req.user.id });
            res.render("dashboard.ejs", { user: req.user, accessories: acc, stones: rock, bracelet: brace});
        }catch(err){
            console.log(err);
        }
    },
    createAccessories: async(req, res) =>{
        try{
            await Accessories.create({
                type: req.body.accType,
                rarity: req.body.accRarity,
                quality: req.body.accQuality,
                stats1: req.body.statsOne,
                stats1Value: req.body.statsOneValue,
                stats2: req.body.statsTwo,
                stats2Value: req.body.statsTwoValue,
                engraving1: req.body.engravingOne,
                node1: req.body.engravingsNodeOne,
                engraving2: req.body.engravingTwo,
                node2: req.body.engravingTwoNode,
                negative: req.body.negativeEngraving,
                negValue: req.body.negativeNode,
                character: req.body.character,
            });
            console.log("Accessory Saved");
            res.redirect("/dashboard");
        } catch(err) {
            console.log(err);
        }
    },
    deleteAccessories: async(req, res) => {
        try{
            await Accessories.findByIdAndRemove({ _id: req.params.id });
            console.log("Accessory Deleted!");
            res.redirect("/dashboard");
        }catch(err){
            res.redirect("/dashboard");
        }
    },
    createStones: async(req, res) => {
        try{
            await Stones.create({
                engraving1: req.body.stonePEngraving,
                engraving2: req.body.stoneSEngraving,
                negative: req.body.stoneNEngraving,
                character: req.body.characterName,
            });
            console.log("Stone Saved!");
            res.redirect("/dashboard");
        }catch(err) {
            res.redirect("/dashboard");
        }
    },
    deleteStones: async(req, res) => {
        try{
            await Stones.findByIdAndRemove({ _id: req.params.id });
            console.log("Stone Deleted!");
            res.redirect("/dashboard");
        }catch(err){
            res.redirect("/dashboard");
        }
    },
    createBracelet: async(req, res) => {
        try{
            await Bracelet.create({
                rarity: req.body.braceletRarity,
                properties1: req.body.braceletProp1,
                properties2: req.body.braceletProp2,
                properties3: req.body.braceletProp3,
                properties4: req.body.braceletProp4,
                properties5: req.body.braceletProp5,
            });
            console.log("Bracelet Saved!");
            res.redirect("/dashboard");
        }catch(err){
            res.redirect("/dashboard");
        }
    },
    deleteBracelet: async(req, res) => {
        try{
            await Bracelet.findByIdAndRemove({ _id: req.params.id });
            console.log("Bracelet Deleted");
            res.redirect("/dashboard");
        }catch(err){
            res.redirect("/dashboard");
        }
    }
};