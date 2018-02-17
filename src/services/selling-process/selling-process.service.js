// Initializes the `selling-process` service on path `/selling-process`
const createService = require('feathers-sequelize');
const createModel = require('../../models/selling-process.model');
const hooks = require('./selling-process.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'selling-process',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/selling-process', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('selling-process');

  service.hooks(hooks);
};
