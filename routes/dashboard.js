const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard');

router.get("/", dashboardController.getDashboard);

router.post("/createAccessories", dashboardController.createAccessories);
router.delete("/deleteAccessories/:id", dashboardController.deleteAccessories);

router.post("/createStone", dashboardController.createStones);
router.delete("/deleteStone/:id", dashboardController.deleteStones);

module.exports = router;