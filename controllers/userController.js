const userService = require("../services/userService");
const { successResponse, errorResponse } = require("../utils/responseHandler");
const { handleValidationError } = require("../utils/errorHandler");

class UserController {
  async createUser(req, res) {
    try {
      const user = await userService.createUser({
        ...req.body,
        title: req.query.form_title,
      });
      return successResponse(res, user, "User created successfully", 201);
    } catch (error) {
      return handleValidationError(res, error);
    }
  }

  async getUsersByTitle(req, res) {
    try {
      const users = await userService.getUsersByTitle(req.query.form_title);
      return successResponse(res, users, "Users retrieved successfully");
    } catch (error) {
      return errorResponse(res, error.message, 400);
    }
  }
}

module.exports = new UserController();
