// Initializes the `customers` service on path `/customers`
const createService = require('feathers-sequelize');
const createModel = require('../../models/customers.model');
const hooks = require('./customers.hooks');

module.exports = function () {
  const app = this;
  const Model = createModel(app);

  const options = {
    name: 'customers',
    Model,
    paginate: {
      default: 1000,
      max: 2000
    }
  };

  // Initialize our service with any options it requires
  app.use('/customers', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('customers');

  service.hooks(hooks);
};
