const userRepository = require("../repositories/userRepository");
const { ValidationError } = require("sequelize");

class UserService {
  async createUser(data) {
    const { title, name, email, phonenumber, isGraduate } = data;

    if (
      !title ||
      !name ||
      !email ||
      !phonenumber ||
      typeof isGraduate !== "boolean"
    ) {
      throw new ValidationError(
        "All fields are required and isGraduate must be boolean"
      );
    }

    return userRepository.create({
      title,
      name,
      email,
      phonenumber,
      isGraduate,
    });
  }

  async getUsersByTitle(title) {
    if (!title) {
      throw new ValidationError("Title query parameter is required");
    }

    return userRepository.findByTitle(title);
  }
}

module.exports = new UserService();
