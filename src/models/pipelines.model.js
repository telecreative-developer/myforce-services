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
    step: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    step_process: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    install_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reject_status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    project_type:{
      type: DataTypes.STRING,
      allowNull:true,
    },
    probability: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reject_message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    drop: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    close: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    lose: {
      type: DataTypes.BOOLEAN,
      allowNull: true
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
    },
    id_branch: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    integration_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    integration_status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    integration_message: {
      type: DataTypes.STRING,
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
    pipelines.hasMany(models.customers, {foreignKey: 'id_customer', sourceKey: 'id_customer'});
    pipelines.hasMany(models.users, {foreignKey: 'id', sourceKey: 'id'});
    pipelines.hasMany(models.pics, {foreignKey: 'id_pic', sourceKey: 'id_pic'});
    pipelines.hasMany(models.branches, {foreignKey: 'id_branch', sourceKey: 'id_branch'});
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return pipelines;
};
