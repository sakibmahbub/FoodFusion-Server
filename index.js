const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const chefs = require("./data/chefs.json");
const recipe = require("./data/recipe.json");

app.get("/", (req, res) => {
  res.json({ message: "hello server running" });
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/recipe", (req, res) => {
  res.send(recipe);
});

app.get("/recipe/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedRecipe = recipe.find((n) => n._id === id);
  res.send(selectedRecipe);
});

app.get("/chefs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const chefsRecipe = recipe.filter((n) => n.chef_id === id);
  res.send(chefsRecipe);
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
