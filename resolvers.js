const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (user, secret, expiresIn) => {
  const { username, password } = user;
  return jwt.sign({ username, password }, secret, { expiresIn });
};

