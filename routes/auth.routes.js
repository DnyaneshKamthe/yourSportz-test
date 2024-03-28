const express = require("express");
const router = express.Router();
const authMiddlewares = require("../middleware/auth");

router.get("/login/success", authMiddlewares.successfullLogin);

router.get("/login/failed", authMiddlewares.loginFailure);

router.get("/google", authMiddlewares.googleAuthLogin);

router.get("/google/callback", authMiddlewares.googleAuthCallback);

router.get("/logout", authMiddlewares.userLogout);

module.exports = router;
