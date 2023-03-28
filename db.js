const Sequelize = require("sequelize");
const sequelize = new Sequelize("Webo", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
