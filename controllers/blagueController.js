const Blague = require("../models/Blague");

//Ajout d'une nouvelle blague
exports.addNewJoke = async (req, res) => {
  try {
    await Blague.create(req.body);
    res.send("Blague insérée");
  } catch (error) {
    res.status(500).send("Erreur à l'ajout d'une blague");
  }
};

//Récupérer toutes les blagues
exports.getAllJokes = async (req, res) => {
  try {
    const jokes = await Blague.findAll();
    res.send(jokes);
  } catch (error) {
    res.status(500).send("Erreur à la récupération des blagues");
  }
};

// Récupérer une blague par id
exports.getJokeById = async (req, res) => {
  try {
    const jokeById = await Blague.findByPk(req.params.id);
    res.send(jokeById);
  } catch (error) {
    res.status(500).send("Erreur à la récupération d'une blague par id");
  }
};

//Récupérer une blague aléatoire
exports.getRandomJoke = async (req, res) => {
  try {
    let currentJokeID = parseInt(req.query.currentJokeID);
    const randomJoke = await Blague.getRandomJoke(currentJokeID);
    res.send({
      id: randomJoke.id,
      question: randomJoke.question,
      answer: randomJoke.answer,
    });
  } catch (error) {
    res.status(500).send("Erreur à la récupération d'une blague aléatoire");
  }
};
