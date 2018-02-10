// Initializes the `subproducts` service on path `/subproducts`
const createService = require('feathers-sequelize');
const createModel = require('../../models/subproducts.model');
const hooks = require('./subproducts.hooks');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'subproducts',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/subproducts', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('subproducts');

  service.hooks(hooks);
};
