const express = require("express");
const router = express.Router();
const authController = require("../controllers/authentication");
const dashboardController = require("../controllers/dashboard");
const mainController = require('../controllers/main');
const { ensureAuth, ensureGuest } = require("../middleware/authentication");


// Homepage/dashboard
router.get("/", mainController.getHomepage);
router.get("/dashboard", ensureAuth, dashboardController.getDashboard);

// Login Page
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);

// Signout Page
router.get("/logout", authController.logout);

// Signup Page
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;