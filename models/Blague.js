const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Blague extends Model {}

Blague.init(
  {
    question: {
      type: DataTypes.STRING,
    },
    answer: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "blague",
    timestamps: false,
  }
);

module.exports = Blague;
