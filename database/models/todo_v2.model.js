const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("..");

class todo_v2 extends Model {}

todo_v2.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      // defaultValue: 'title',
    },
    description: {
      type: DataTypes.STRING,
      // defaultValue: 'description',
    },
    isDone: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: "todo_v2",
  }
);

module.exports = todo_v2;
