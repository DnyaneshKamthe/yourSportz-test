const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.get("/list", userController.getUSers);
router.post("/delete", userController.deleteUsers);

module.exports = router;
