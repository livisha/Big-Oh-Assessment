const express = require("express");
const userController = require("../controllers/userController");
const validateSchema = require("../middlewares/validateSchema");

const router = express.Router();

router.post("/fill_data", validateSchema, userController.createUser);
router.get("/fill_data", userController.getUsersByTitle);

module.exports = router;
