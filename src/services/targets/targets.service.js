// Initializes the `targets` service on path `/targets`
const createService = require('feathers-sequelize');
const createModel = require('../../models/targets.model');
const hooks = require('./targets.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'targets',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/targets', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('targets');

  service.hooks(hooks);
};
