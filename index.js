const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const chefs = require("./data/chef.json");

app.get("/", (req, res) => {
  res.json({ message: "hello server running" });
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
