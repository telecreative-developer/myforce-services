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
      id_product: {
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
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return pipelineProducts;
};
