module.exports = {
  handleValidationError: (res, error) => {
    if (error.name === "SequelizeValidationError") {
      const messages = error.errors.map((err) => err.message);
      return res.status(400).json({ status: "error", errors: messages });
    }
    return res.status(500).json({ status: "error", message: error.message });
  },
};
