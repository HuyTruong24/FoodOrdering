const express = require("express");
const path = require("path");
const cookies = require("cookie-parser");
const app = express();
const PORT = 3000;

const user = require("./routes/user");
const restaurants = require("./routes/restaurants");
const food = require("./routes/food");
const auth = require("./routes/auth");

// Serve static frontend
app.use(express.static(path.join(__dirname, "../client")));
//middleware to parse JSON bodies
app.use(express.json());
app.use(cookies());

//routes
app.use("/api/users", user);
app.use("/api/restaurants", restaurants);
app.use("/api/food", food);
app.use("/auth", auth);
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
