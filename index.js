const express = require("express");
const sequelize = require("./config/database");
const Blague = require("./models/Blague");

sequelize.sync({ alter: true }).then(() => console.log("database is ready"));

const app = express();

app.use(express.json());

app.post("/blagues", async (req, res) => {
  await Blague.create(req.body);
  res.send("Blague insérée");
});

app.get("/blagues", async (req, res) => {
  const jokes = await Blague.findAll();
  res.send(jokes);
});

app.get("/blagues/random", async (req, res) => {
  const randomJoke = await Blague.findOne({ order: sequelize.random() });
  res.send(randomJoke);
});

app.get("/blagues/:id", async (req, res) => {
  const jokeById = await Blague.findByPk(req.params.id);
  res.send(jokeById);
});

app.listen(3000, () => {
  console.log("app is running");
});
