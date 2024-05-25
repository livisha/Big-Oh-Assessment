const User = require("../models/user");

class UserRepository {
  async create(user) {
    return User.create(user);
  }

  async findByTitle(title) {
    return User.findAll({ where: { title } });
  }
}

module.exports = new UserRepository();
