// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const checks = sequelizeClient.define(
    'checks',
    {
      id_check: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      checkin: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },
      checkout: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      longitude: {
        type: DataTypes.STRING,
        allowNull: false
      },
      latitude: {
        type: DataTypes.STRING,
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
  checks.associate = function(models) {
    // Define associations here
    checks.hasMany(models.customers, {
      foreignKey: 'id_customer',
      sourceKey: 'id_customer'
    });
    checks.hasMany(models.users, { foreignKey: 'id', sourceKey: 'id' });
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return checks;
};
