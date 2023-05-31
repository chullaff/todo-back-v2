const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("todo_v2", "postgres", "qwerty85", {
  host: "localhost",
  dialect: "postgres",
});

const initDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log("Соединение с БД было успешно установлено");
  } catch (error) {
    console.log("Невозможно выполнить подключение к БД: ", error);
    process.exit();
  }
};

module.exports = {
  sequelize,
  initDB,
};
