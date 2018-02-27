// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const branches = sequelizeClient.define('branches', {
    id_branch: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    branch: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_manager: {
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
  branches.associate = function (models) {
    // Define associations here
    branches.hasMany(models.managers, {foreignKey: 'id_manager', sourceKey: 'id_manager'});
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return branches;
};
