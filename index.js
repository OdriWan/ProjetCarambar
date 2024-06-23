const express = require("express");
const sequelize = require("./config/database");
const BlagueRouter = require("./routes/blagueRouter");

//Port de l'app
const port = 3000;

/**
 * Synchronisation de la base de données :
 * - force : supprime les données à chaque mise à jour
 * - alter : met à jour la bdd sans supprimer les données
 */
sequelize.sync({ alter: true }).then(() => console.log("database is ready"));

const app = express();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Outil d'affichage pour la vue
app.set("view engine", "ejs");

//Ajout d'un routeur
app.use("/", BlagueRouter);

//Permet d'écouter l'appli sur le port spécifié
app.listen(port, () => {
  console.log("app is running");
});
