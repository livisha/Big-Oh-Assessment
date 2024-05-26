const { body, validationResult } = require("express-validator");

const validateForm = [
  body("uniqueId").isUUID().withMessage("uniqueId must be a valid UUID"),
  body("title").isString().withMessage("title must be a string"),
  body("name").isString().withMessage("name must be a string"),
  body("email").isEmail().withMessage("email must be a valid email address"),
  body("phonenumber").isNumeric().withMessage("phonenumber must be a number"),
  body("isGraduate").isBoolean().withMessage("isGraduate must be a boolean"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: "error", errors: errors.array() });
    }
    next();
  },
];

module.exports = validateForm;
