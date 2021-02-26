require("dotenv").config();

validateFields = (req, res, next) => {
  // add here some content
  next();
};

module.exports = { validateFields };
