// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const pipelines = sequelizeClient.define('pipelines', {
    id_pipeline: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    pipeline: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_customer: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_pic: {
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

  pipelines.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    pipelines.hasMany(models.status, {foreignKey: 'id_status', sourceKey: 'id_status'});
    pipelines.hasMany(models.customers, {foreignKey: 'id_customer', sourceKey: 'id_customer'});
    pipelines.hasMany(models.users, {foreignKey: 'id', sourceKey: 'id'});
    pipelines.hasMany(models.pics, {foreignKey: 'id_pic', sourceKey: 'id_pic'});
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return pipelines;
};
