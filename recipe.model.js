module.exports = (sequelize, Sequelize) => {
  const recipe = sequelize.define("recipe", {
    rid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      get() {
        return (
          "myPrefix" + this.getDataValue("rid").toString().padStart(6, "0")
        );
      },
    },
    rname: {
      type: Sequelize.STRING(64),
      allowNull: false,
      validate: {
        is: `^[A-Za-z]+(?:[\\s-][A-Za-z]+)*$`,
      },
    },
    ingrid: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [10, 200], // validates that the address is between 10 and 200 characters long
      },
    },
  });

  return recipe;
};
