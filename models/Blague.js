const { Model, DataTypes, Op } = require("sequelize");
const sequelize = require("../config/database");

class Blague extends Model {
  /**
   * Fonction qui récupère une blague aléatoire
   * @param {int} jokeID l'id de la blague courante
   * @returns une blague aléatoire
   */
  static async getRandomJoke(jokeID) {
    let whereClause = {};

    //Permet de ne pas récupérer la même blague deux fois d'affilée (not current ID)
    if (!isNaN(parseInt(jokeID))) {
      whereClause = {
        id: {
          [Op.not]: parseInt(jokeID),
        },
      };
    }

    return await Blague.findOne({
      order: sequelize.random(),
      where: whereClause,
    });
  }
}

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
