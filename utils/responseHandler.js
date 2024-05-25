module.exports = {
  successResponse: (
    res,
    data,
    message = "Operation successful",
    statusCode = 200
  ) => {
    res.status(statusCode).json({ status: "success", message, data });
  },

  errorResponse: (res, message = "Operation failed", statusCode = 500) => {
    res.status(statusCode).json({ status: "error", message });
  },
};
