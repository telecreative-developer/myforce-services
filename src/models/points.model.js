// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const points = sequelizeClient.define('points', {
    id_point: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    point: {
      type: DataTypes.INTEGER,
      allowNull: false
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
  points.associate = function (models) {
    // Define associations here
    points.hasMany(models.branches, {foreignKey: 'id_branch', sourceKey: 'id_branch'});
    points.hasMany(models.pipelines, {foreignKey: 'id_pipeline', sourceKey: 'id_pipeline'});
    points.hasMany(models.customers, {foreignKey: 'id_customer', sourceKey: 'id_customer'});
    points.hasMany(models.users, {foreignKey: 'id', sourceKey: 'id'});
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return points;
};
