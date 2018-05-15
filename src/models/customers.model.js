// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient')
  const customers = sequelizeClient.define(
    'customers',
    {
      id_customer: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.TEXT,
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
      website: {
        type: DataTypes.STRING,
        allowNull: true
      },
      id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_branch: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true
        }
      }
    }
  )

  customers.associate = function(models) {
    // eslint-disable-line no-unused-vars
    // Define associations here
    customers.hasMany(models.users, { foreignKey: 'id', sourceKey: 'id' })
    customers.hasMany(models.branches, { foreignKey: 'id_branch', sourceKey: 'id_branch' })
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  }

  return customers
}
