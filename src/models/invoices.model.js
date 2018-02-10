// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const invoices = sequelizeClient.define('invoices', {
    id_invoice: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    file: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_status: {
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

  invoices.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    invoices.hasMany(models.users, {foreignKey: 'id', sourceKey: 'id'});
    invoices.hasMany(models.status, {foreignKey: 'id_status', sourceKey: 'id_status'});
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return invoices;
};
