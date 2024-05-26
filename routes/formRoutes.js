const express = require("express");
const { setSchema } = require("../middlewares/schemaStore");
const validateSchema = require("../middlewares/validateSchema");

const router = express.Router();

// Route to define schema
router.post("/form", (req, res) => {
  const schema = req.body;

  if (!schema) {
    return res
      .status(400)
      .json({ status: "error", message: "Schema is required" });
  }

  setSchema(schema);
  res
    .status(201)
    .json({ status: "success", message: "Schema added successfully" });
});

router.post("/data", validateSchema, (req, res) => {
  res
    .status(200)
    .json({ status: "success", message: "Data is valid", data: req.body });
});

module.exports = router;
