const { Sequelize } = require("sequelize");

//Configuration de la base de données
const sequelize = new Sequelize("test-db", "user", "pass", {
  dialect: "sqlite",
  host: "./dev.sqlite",
});

module.exports = sequelize;
