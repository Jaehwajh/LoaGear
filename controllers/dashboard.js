const Accessories = require("../model/accessories");
const Stones = require('../model/stone');
const Bracelet = requrie("../model/bracelet");

module.exports = {
    getDashboard: async(req, res) => {
        try{
            const gear = await Accessories.find({ user: req.user.id });
            res.render("dashboard.ejs", { user: req.user, accessories: gear, stones: gear});
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
                primaryEngraving: req.body.stonePEngraving,
                secondaryEngraving: req.body.stoneSEngraving,
                negativeEngraving: req.body.stoneNEngraving,
                characterName: req.body.characterName,
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
};