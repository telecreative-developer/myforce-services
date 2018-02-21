// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const subproducts = sequelizeClient.define('subproducts', {
    id_subproduct: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    subproduct: {
      type: DataTypes.STRING,
      allowNull: false
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    file: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    id_product: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  subproducts.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    subproducts.hasMany(models.products, {foreignKey: 'id_product', sourceKey: 'id_product'});
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return subproducts;
};
