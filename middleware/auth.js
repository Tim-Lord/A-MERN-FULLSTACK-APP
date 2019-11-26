const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
  //Get token from Header
  const token = req.header("x-auth-token");

  //Check Token
  if (!token) {
    return res.status(401).json({ msg: "No Token, authorization Denied" });
  }

  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
