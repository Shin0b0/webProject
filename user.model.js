module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define("user", {
    uid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      get() {
        return this.getDataValue("uid");
      },
    },
    uname: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        is: `^[A-Za-z]+(?:[\\s-][A-Za-z]+)*$`,
      },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    password: {
      type: Sequelize.STRING,
      allowNull: false,
      // validate: {
      //   len: [6, 20], // validates that the password is between 6 and 20 characters long
      //   is: /^[0-9a-f]{64}$/i,
      // },
    },
  });

  return user;
};
