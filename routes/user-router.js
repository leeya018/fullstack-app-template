const express = require("express");
let router = express.Router();
const { getUser } = require("../controllers/user-controller");
const {
  validateFields,
} = require("../middlewares/middleware1");

router.get("/user", validateFields, getUser);

module.exports = router;
