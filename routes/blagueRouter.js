const express = require("express");
const Blague = require("../models/Blague");
const sequelize = require("../config/database");
const router = express.Router();
const blagueController = require("../controllers/blagueController");

//Route par défaut
router.get("/", async (req, res) => {
  res.render("homepage");
});

//Ajouter une nouvelle blague
router.post("/blagues", blagueController.addNewJoke);

//Récupérer toutes les blagues
router.get("/blagues", blagueController.getAllJokes);

//Récupérer une blague aléatoire
router.get("/blagues/random", blagueController.getRandomJoke);

//Récupérer une blague par id
router.get("/blagues/:id", blagueController.getJokeById);

module.exports = router;
