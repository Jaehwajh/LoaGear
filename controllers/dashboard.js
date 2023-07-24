const Accessories = require("../model/accessories");
const Stones = require('../model/stone');

module.exports = {
    createAccessories: async(req, res) =>{
        try{
            await Accessories.create({
                accessoryType: req.body.accessoryType,
                rarity:     req.body.rarity,
                quality:    req.body.quality,
                primaryStats:   req.body.primaryStats,
                secondaryStats: req.body.secondaryStats,
                primaryEngraving:   req.body.primaryEngraving,
                primaryEngravingNode:   req.body.primaryEngravingNode,
                secondaryEngraving:    req.body.secondaryEngraving,
                secondaryEngravingNode:    req.body.secondaryEngravingNode,
                negativeEngraving:  req.body.negativeEngraving,
                negativeEngravingNode:  req.body.negativeEngravingNode,
                characterName:  req.body.characterName,
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