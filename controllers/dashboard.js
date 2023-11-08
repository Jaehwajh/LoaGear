const Accessories = require("../model/accessories");
const Stones = require('../model/stone');
const Bracelet = require("../model/bracelet");

// Engravings
const bEngravings = require("../config/AccEngraving/battleEngraving");
const cEngravings = require("../config/AccEngraving/classEngraving");
const nEngravings = require("../config/AccEngraving/negativeEngraving");

// Accessory Properties
const rarities = require("../config/AccProperties/accRarity");
const stats = require("../config/AccProperties/accStats");
const types = require("../config/AccProperties/accType");

module.exports = {
    getDashboard: async(req, res) => {  
        try{
            const accessory = await Accessories.find({ user: req.user.id });
            const stone = await Stones.find({ user: req.user.id });
            const bracelets = await Bracelet.find({ user: req.user.id });

            const firstEngraving = cEngravings.concat(bEngravings);

            res.render("dashboard.ejs", { 
                 user: req.user,
                 accessory: accessory, 
                 stone: stone,
                 bracelets: bracelets, 
                 rarities, 
                 stats, 
                 types,
                 firstEngraving,
                 bEngravings,
                 cEngravings,
                 nEngravings,
                });
        }catch(err){
            console.log(err);
        }
    },
    createAccessories: async(req, res) =>{
        try{
            await Accessories.create({
                accType: req.body.accType,
                accRarity: req.body.accRarity,
                accQuality: req.body.accQuality,
                statsOne: req.body.statsOne,
                statsOneValue: req.body.statsOneValue,
                statsTwo: req.body.statsTwo,
                statsTwoValue: req.body.statsTwoValue,
                engravingOne: req.body.engravingOne,
                engravingOneNode: req.body.engravingOneNode,
                engravingTwo: req.body.engravingTwo,
                engravingTwoNode: req.body.engravingTwoNode,
                negativeEngraving: req.body.negativeEngraving,
                negativeNode: req.body.negativeNode,
                character: req.body.character,
                user: req.user.id
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
                engravingOne: req.body.engravingOne,
                engravingTwo: req.body.engravingTwo,
                negativeEngraving: req.body.negativeEngraving,
                character: req.body.character,
                user: req.user.id
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