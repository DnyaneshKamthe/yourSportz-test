const Sequelize = require("sequelize-cockroachdb");
const sequelize = require("../config/cockroachDB")

const User = sequelize.define("user", {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
  name: {
    type: Sequelize.TEXT,
  },
  email: {
    type: Sequelize.TEXT,
  },
  googleId: {
    type: Sequelize.TEXT,
  },
});

module.exports = User;
