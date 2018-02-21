// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const teamUpdates = sequelizeClient.define('team_updates', {
    id_team_update: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_branch: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_pipeline: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_customer: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  teamUpdates.associate = function (models) {
    // Define associations here
    teamUpdates.hasMany(models.branches, {foreignKey: 'id_branch', sourceKey: 'id_branch'});
    teamUpdates.hasMany(models.pipelines, {foreignKey: 'id_pipeline', sourceKey: 'id_pipeline'});
    teamUpdates.hasMany(models.customers, {foreignKey: 'id_customer', sourceKey: 'id_customer'});
    teamUpdates.hasMany(models.users, {foreignKey: 'id', sourceKey: 'id'});
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return teamUpdates;
};
