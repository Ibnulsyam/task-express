const { Sequelize } = require("sequelize");

//Connect to Database
const sequelize = new Sequelize({
  database: "tugas-eduwork",
  host: "localhost",
  username: "root",
  password: "",
  dialect: "mysql",
  logging: false,
});
//test
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
