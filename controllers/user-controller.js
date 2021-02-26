const UserModel = require("../models/user-model");

getUser = async (req, res) => {
  try {
    let user = await UserModel.findOne({ user: "leeya" }).exec();
    return res.json(user);
  } catch (error) {
    return res.json({ error });
  }
};

module.exports = { getUser };
