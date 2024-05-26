const { body, validationResult } = require("express-validator");
const { getSchema } = require("../middlewares/schemaStore");

const validateSchema = (req, res, next) => {
  const schema = getSchema();

  if (!schema) {
    return res
      .status(400)
      .json({ status: "error", message: "Schema not defined" });
  }

  const validations = [];

  for (const [field, rules] of Object.entries(schema)) {
    let validator = body(field);

    if (rules.type === "string") {
      validator = validator.isString().withMessage(`${field} must be a string`);
    } else if (rules.type === "email") {
      validator = validator
        .isEmail()
        .withMessage(`${field} must be a valid email`);
    } else if (rules.type === "number") {
      validator = validator
        .isNumeric()
        .withMessage(`${field} must be a number`);
    } else if (rules.type === "uuid") {
      validator = validator
        .isUUID()
        .withMessage(`${field} must be a valid UUID`);
    } else if (rules.type === "boolean") {
      validator = validator
        .isBoolean()
        .withMessage(`${field} must be a boolean`);
    }

    validations.push(validator);
  }

  Promise.all(validations.map((validation) => validation.run(req))).then(() => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: "error", errors: errors.array() });
    }
    next();
  });
};

module.exports = validateSchema;
