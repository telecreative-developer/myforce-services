// Initializes the `pipelines` service on path `/pipelines`
const createService = require('feathers-sequelize');
const createModel = require('../../models/pipelines.model');
const hooks = require('./pipelines.hooks');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'pipelines',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/pipelines', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('pipelines');

  service.hooks(hooks);
};
