// Initializes the `jobslevel` service on path `/jobslevel`
const createService = require('feathers-sequelize');
const createModel = require('../../models/jobslevel.model');
const hooks = require('./jobslevel.hooks');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'jobslevel',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/jobslevel', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('jobslevel');

  service.hooks(hooks);
};
