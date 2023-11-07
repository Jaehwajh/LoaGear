const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard');

router.get("/", dashboardController.getDashboard);

router.post("/createAccessory", dashboardController.createAccessories);

router.post("/createStone", dashboardController.createStones);

module.exports = router;