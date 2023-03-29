const db = require("../db.js");

db.user = require("./user.model")(db.sequelize, db.Sequelize);
db.recipe = require("./recipe.model")(db.sequelize, db.Sequelize);

//Associations

db.user.hasMany(db.recipe, { foreignKey: "uid" });

module.exports = db;
