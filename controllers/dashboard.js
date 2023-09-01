const Accessories = require("../model/accessories");
const Stones = require('../model/stone');
const Bracelet = require("../model/bracelet");

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
                rarity: req.body.rarity,
                quality: req.body.quality,
                stats1: req.body.primaryStats,
                stats2: req.body.secondaryStats,
                engraving1: req.body.primaryEngraving,
                value1: req.body.node1,
                engraving2: req.body.secondaryEngraving,
                value2: req.body.node2,
                negative: req.body.negativeEngraving,
                negValue: req.body.negativeNode,
                character: req.body.characterName,
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