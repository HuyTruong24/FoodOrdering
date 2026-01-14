const jwt = require("jsonwebtoken");
const config = require("dotenv").config();
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["Authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No authoratative token" });

  jwt.verify(token, process.env.TOKEN, (error, user) => {
    if (error) return res.status(403).json({ error: "Invalid token" });

    req.user = user;
    next();
  });
};
module.exports = { authenticateToken };
