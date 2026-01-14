const jwt = require("jsonwebtoken");
const config = require("dotenv").config(); //load environment variables from a local .env file into the process.env object.

const refreshToken = (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return res.status(401).json({ error: "No refresh token" });
  }
  const secretKey = process.env.TOKEN;
  jwt.verify(refreshToken, secretKey, (error, user) => {
    if (error) {
      return res.status(403).json({ error: "Invalid refresh token" });
    }
    console.log(user);
    const accessToken = jwt.sign({ email: user.email }, secretKey, {
      expiresIn: "1h",
      algorithm: "HS512",
      subject: user.userID,
    }); //create access token
  });
};

module.exports = { refreshToken };
