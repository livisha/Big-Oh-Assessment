const userRepository = require("../repositories/userRepository");
const User = require("../models/user");
const { ValidationError } = require("sequelize");

class UserService {
  async createUser(data) {
    const { title, name, email, phonenumber, isGraduate } = data;
    const res = await User.create({
      title,
      name,
      email,
      phonenumber,
      isGraduate,
    });
    console.log(res);
  }

  async getUsersByTitle(title) {
    if (!title) {
      throw new ValidationError("Title query parameter is required");
    }

    return userRepository.findByTitle(title);
  }
}

module.exports = new UserService();
