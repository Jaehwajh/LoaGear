const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard');

router.get("/", dashboardController.getDashboard);

router.post("/createAccessories", dashboardController.createAccessories);

router.post("/createStone", dashboardController.createStones);

module.exports = router;