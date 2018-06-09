// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const pipelineProducts = sequelizeClient.define(
    'pipeline_products',
    {
      id_pipeline_product: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_pipeline: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_customer: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_product: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_subproduct: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      unit_price: {
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

  pipelineProducts.associate = function(models) {
    // eslint-disable-line no-unused-vars
    pipelineProducts.hasMany(models.pipelines, {foreignKey: 'id_pipeline', sourceKey: 'id_pipeline'});
    pipelineProducts.hasMany(models.products, {foreignKey: 'id_product', sourceKey: 'id_product'});
    pipelineProducts.hasMany(models.customers, {foreignKey: 'id_customer', sourceKey: 'id_customer'});
    pipelineProducts.hasMany(models.subproducts, {foreignKey: 'id_subproduct', sourceKey: 'id_subproduct'});
    pipelineProducts.hasMany(models.users, {foreignKey: 'id', sourceKey: 'id'});
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return pipelineProducts;
};
