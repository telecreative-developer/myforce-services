// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get("sequelizeClient");
  const targets = sequelizeClient.define(
    "targets",
    {
      id_target: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      target_month: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      target_year: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      target_revenue_month: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      target_revenue_year: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      target_pipeline_month:{
        type: DataTypes.INTEGER,
      },
      target_pipeline_revenue_month:{
        type: DataTypes.INTEGER
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      }
    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  targets.associate = function(models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return targets;
};
