const Sequelize = require("sequelize-cockroachdb");

const sequelize = new Sequelize({
  dialect: "postgres",
  username: process.env.User_Name,
  password: process.env.Password,
  host: process.env.Host,
  port: process.env.Port,
  database: "defaultdb",
  dialectOptions: {
    ssl: {},
  },
  logging: false,
});

module.exports = sequelize;
