// Initializes the `pipeline-products` service on path `/pipeline-products`
const createService = require('feathers-sequelize');
const createModel = require('../../models/pipeline-products.model');
const hooks = require('./pipeline-products.hooks');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'pipeline-products',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/pipeline-products', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('pipeline-products');

  service.hooks(hooks);
};
